import React, {useState} from "react";
import './listingstyle.css';
import SidebarProduct from '../../../src/components/Sidebarproduct'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import Products from "../../../src/components/product";


const ListingPage =() => {

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);

    return(
        <>
        <section className="listingPage">
            <div className="container-fluid">
                <div className="breadcrumb flex-column">
                    <h1>Snack</h1>
                    <ul className="list list-inline mb-0">
                        <li>
                            <Link to={'/'}>
                                <RoofingOutlinedIcon className="home-icon-homes"/> Home
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>All</Link>
                        </li>
                        <li>
                            <Link to={''}>Products</Link>
                        </li>
                    </ul>
                </div>

                <div className="listingData">
                    <div className="row">
                        <div className="col-md-3 left-sidebarWrapper">
                            <SidebarProduct/>
                        </div>
                        <div className="col-md-9 right-siderWrapper homeProduct">
                            <div className="topStrip d-flex align-itmes-center">
                                <p className="mb-0">We found <span className="text-success">21</span>items for you!</p>
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="tab_ position-relative">
                                        <Button className="btn_" onClick={() => setisOpenDropDown(!isOpenDropDown)}>Show: 50</Button>
                                        {
                                            isOpenDropDown !== false &&
                                            <ul className="dropdownMenu">
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown(false)}>25</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown(false)}>50</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown(false)}>75</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown(false)}>100</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown(false)}>All</Button> </li>
                                            </ul>
                                        }
                                    </div>
                                    <div className="tab_ ml-3 position-relative">
                                        <Button className="btn_" onClick={() => setisOpenDropDown2(!isOpenDropDown2)}>Sort by: Featured</Button>
                                        {
                                            isOpenDropDown2 !== false &&
                                            <ul className="dropdownMenu">
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown2(false)}>Featured</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown2(false)}>Price: Low to High</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown2(false)}>Price: High to Low</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown2(false)}>Release Date</Button> </li>
                                                <li><Button className="align-items-center"  onClick={() => setisOpenDropDown2(false)}>Avg. Rating</Button> </li>
                                            </ul>
                                        }
                                    </div>                   
                                </div>
                            </div>
                            <div className="productRow">
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                            </div>
                            <div className="productRow">
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                            </div>
                            <div className="productRow">
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                                <div className="item">
                                    <Products />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ListingPage;