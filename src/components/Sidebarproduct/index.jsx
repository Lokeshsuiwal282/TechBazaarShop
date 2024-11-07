import React from "react";
import './sideberstyle.css';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';

import Laptop_image from '../../../src/assets/images/Product-images/product01.png';
import HeadPhones_image from '../../../src/assets/images/Product-images/product02.png';
import Tablets_image from '../../../src/assets/images/Product-images/product04.png';
import Camera_image from '../../assets/images/Product-images/product09.png';
import hp_laptop_image from '../../../src/assets/images/Product-images/product03.png';
import dell_laptop_image from '../../../src/assets/images/Product-images/product06.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
    return `${value}°C`;
  }
const SidebarProduct =() =>{

    const [value, setValue] = React.useState([1540, 6400]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <>
            <div className="sideber">
                <div className="card border-0 shadow">
                    <h3>Category</h3>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={Laptop_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">Laptops</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                30
                            </span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={HeadPhones_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">HeadPhones</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                12
                            </span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={Tablets_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">Tablets</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                50
                            </span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={Camera_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">Camera</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                10
                            </span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={hp_laptop_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">HP Laptops</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                17
                            </span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={dell_laptop_image} width={30} />
                            </span>
                            <h4 className="mb-0 ml-3 mr-3 catitem-name">Dell Laptops</h4>
                            <span className="rounded-circle d-flex algin-items-center justify-content-center ml-auto">
                                20
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card border-0 shadow">
                    <h3>Fill by price</h3>
                    <Slider
                        min={50}
                        step={30}
                        max={10000}
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        // valueLabelDisplay="none"
                        getAriaValueText={valuetext}
                    />
                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span><strong className="text-secondary">₹{value[0]}</strong></span>
                        <span className="ml-auto"> to <strong className="text-secondary">₹{value[1]}</strong></span>
                    </div>
                    <div className="filters">
                        <h5>Brands</h5>
                        <ul className="mb-0">
                            <li><Checkbox {...label} />HP</li>
                            <li><Checkbox {...label} />Lenovo</li>
                            <li><Checkbox {...label} />Dell</li>
                            <li><Checkbox {...label} />ASUS</li>
                            <li><Checkbox {...label} />FRONTECH</li>
                            <li><Checkbox {...label} />Acer</li>
                            <li><Checkbox {...label} />Apple</li>
                            <li><Checkbox {...label} />Ant Esports</li>
                            <li><Checkbox {...label} />Saco</li>
                            <li><Checkbox {...label} />Foxin</li>
                        </ul>
                    </div>
                    <div className="filters">
                        <h5>RAM</h5>
                        <ul>
                            <li><Checkbox {...label} />2GB</li>
                            <li><Checkbox {...label} />4GB</li>
                            <li><Checkbox {...label} />8GB</li>
                            <li><Checkbox {...label} />16GB</li>
                            {/* <li><Checkbox {...label} />32GB</li> */}
                        </ul>
                    </div>
                    {/* <div className="filters">
                        <h5>St</h5>
                        <ul>
                            <li><Checkbox {...label} />128GB</li>
                            <li><Checkbox {...label} />256GB</li>
                            <li><Checkbox {...label} />512GB</li>
                            <li><Checkbox {...label} />1TB</li>
                            <li><Checkbox {...label} />2TB</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SidebarProduct;