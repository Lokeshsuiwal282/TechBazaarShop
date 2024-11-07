import React, {useState} from "react";
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Select = ({ data, icon, placeholder }) => {

  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectItem] = useState(placeholder); 
  const [listData, setListData] = useState(data); 
  const [listData2, setListData2] = useState(data);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectItem(name); 
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });

    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListData(list2); 
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="cursor position-relative">
        <span className="openSelect" onClick={openSelect}>
          {selectedItem.length > 14 ? selectedItem.substr(0, 14) + '..' : selectedItem} 
          <KeyboardArrowDownIcon className="arrow" />
        </span>
        {isOpenSelect && (
          <div className="selectDrop">
            <div className="searchField">
              <input type="text" placeholder="Search Here.." onChange={filterList} />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {listData.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    onClick={() => closeSelect(index + 1, item)}
                    className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
