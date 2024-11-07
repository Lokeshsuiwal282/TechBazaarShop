import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css';
import Logo from '../../assets/images/logo.png'
import Select from "../selectDrop/select";
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import Iconwish from '../../assets/images/icons/heart.svg'
import Iconaccount from '../../assets/images/profile-user.png'
import Iconcart from '../../assets/images/icons/cart.svg'
import { flushSync } from "react-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {

    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const dropdownRef = useRef(null);
  
    // Toggle dropdown open and close when clicking the account icon
    const toggleDropdown = () => {
      setIsOpenDropDown(prev => !prev);
    };
  
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropDown(false);
      }
    };
  
    useEffect(() => {
      if (isOpenDropDown) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpenDropDown]);


    const [categories, setcategories] = useState([
        'Mouse',
        'Laptops',
        'Dell Laptops',
        'KeyBorad',
        'LED',
        'Smartphone',
        'Motherboard',
        'RAM',
        'SSD',
        'Cameras',
        'HDD'
    ])

    const [lanuages, setlanguage] = useState([
        'English',
        'हिंदी'
    ])

    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                res.data.data.map((item, index) => {
                    countryList.push(item.country);
                })
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
        <header>
            <div id="header">
                {/* MAIN HEADER */}
                <div className="header-container py-2">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="header-logo">
                                <a href="#" className="logo">
                                    <img src={Logo} alt="Logo" />
                                </a>
                            </div>
                            {/* <h3>Om Computer's</h3> */}

                        </div>
                        <div className="col-md-7">
                            <div className="header-search">
                                <div className="header-bar">
                                    {/* <div className="selectDropWrapper cursor position-relative">
                                        <Select data={categories} placeholder='All Categories'/>
                                    </div> */}
                                    <div className="selectDropWrapper cursor position-relative">
                                        {/* <LocationOnIcon className="location-icon" /> */}
                                        <Select data={countryList} className='nav-link' placeholder='Your Location' />
                                    </div>
                                    <div className="search">
                                        <input className="input" type="text" placeholder="Search for Products and Brands" />
                                        <button className="search-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 clearfix">
                            <div className="header-ctn">
                                <div className="search-language">
                                    <Select data={lanuages} className='nav-link' placeholder='Language' />
                                </div>
                                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                    <ul className="list list-inline mb-0 headerTabs">
                                        <li className="list-inline-item">
                                            <Link to={'/listing-Page/Shop-Wishlist-90sf3-Producth3lsc'}>
                                                <span>
                                                    <img src={Iconwish} />
                                                    <span className="badge rounded-circle">3</span>
                                                </span>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to={'/listing-Page/product-details/cart-products'}>
                                                <span>
                                                    <img src={Iconcart} />
                                                    <span className="badge rounded-circle">3</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="account_img" onClick={toggleDropdown}>
                                                <img src={Iconaccount} />
                                            </span>
                                            {
                                                isOpenDropDown  && (
                                                <ul className="dropdownMenu" ref={dropdownRef}>
                                                    <li><Link to={'/Acount-Profile-90sf3accountprofile53bdc__45_-000-Profile'}><Button><PermIdentityOutlinedIcon />My Account</Button></Link></li>
                                                    <li><Link to={'/Acount-Profile-90sf3accountprofile53bdc__45_-000-Profile'}><Button><GpsFixedOutlinedIcon />Order Tracking</Button></Link></li>
                                                    <li> <Link to={'/listing-Page/Shop-Wishlist-90sf3-Producth3lsc'}><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></Link></li>
                                                    <li><Link to={'/Acount-Profile-90sf3accountprofile53bdc__45_-000-Profile'}><Button><TuneOutlinedIcon />Setting</Button></Link></li>
                                                    <li><Link to={'/Acount-Profile-90sf3accountprofile53bdc__45_-000-Profile'}><Button><LogoutOutlinedIcon />Sign out</Button></Link></li>
                                                </ul>
                                                )
                                            }
                                        </li>
                                    </ul>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
         {/* /MAIN END HEADER */ }
        </>
    );
};

const Navigation = () => {
    
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
    return (
        <>
        {/* /MAIN START NAV */ }
        <div id = "navigation" >
            <div className="container-fluid">
            <div className="row position-relative">
                <div className="col-md-2">
                    <div className="categories-list ">
                            <Button className="product-card__add-btn btn categories-list_button"><Link to="/listing-Page">All Categories</Link></Button>
                        </div>
                    </div>
                <div className="col-md-10">
                    
                <nav className="main-nav" ref={navRef}>
                    <ul className="main-navs nav position-static">
                        <li className="list-inline-item mb-0 active">
                            <Button><Link to="/">Home</Link></Button>
                        </li>
                        <li className="list-inline-item">
                            <Button><Link>About</Link></Button>
                        </li>
                        <li className="list-inline-item position-static">
                            <Button><Link>Top offers</Link></Button>
                            {/* <div className="dropdown_menu offersMenu w-100">
                                <div className="row">
                                    <div className="col">
                                        <h2>offer 1</h2>
                                    </div>
                                    <div className="col">
                                        <h2>offer 2</h2>
                                    </div>
                                    <div className="col">
                                        <h2>offer 3</h2>
                                    </div>
                                    <div className="col">
                                        <h2>offer 4</h2>
                                    </div>
                                    <div className="col">
                                        <h2>offer 5</h2>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                        <li className="list-inline-item">
                            <Button><Link>Mobiles & Tablets</Link></Button>
                        </li>
                        <li className="list-inline-item">
                            <Button><Link>Laptops<KeyboardArrowDownIcon /></Link></Button>
                            <div className="dropdown_menu">
                                <ul>
                                    <li><Button><Link to="/about">Dell Latitude</Link></Button></li>
                                    <li><Button><Link to="/about">HP</Link></Button></li>
                                    <li><Button><Link to="/about">ThinkPad(Lenovo)</Link></Button></li>
                                    <li><Button><Link to="/about">Touch Screen</Link></Button></li>
                                    <li><Button><Link to="/about">Other</Link></Button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Button><Link>Electronices<KeyboardArrowDownIcon /></Link></Button>
                            <div className="dropdown_menu">
                                <ul>
                                    <li><Button><Link to="/">Laptops Batterys</Link></Button></li>
                                    <li><Button><Link to="/">Speaker</Link></Button></li>
                                    <li><Button><Link to="/">Laser Printers</Link></Button></li>
                                    <li><Button><Link to="/">Inkjet Printers</Link></Button></li>
                                    <li><Button><Link to="/">LED Monitor</Link></Button></li>
                                    <li><Button><Link to="/">Camera</Link></Button></li>
                                    <li><Button><Link to="/">Other</Link></Button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Button><Link>Customer Service<KeyboardArrowDownIcon /></Link></Button>

                            <div className="dropdown_menu">
                                <ul>
                                    <li><Button><Link to="/about">About Us</Link></Button></li>
                                    <li><Button><Link to="/about">Contact</Link></Button></li>
                                    <li><Button><Link to="/about">Service</Link></Button></li>
                                    <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                    <li><Button><Link to="/about">24/7 Customer Care</Link></Button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <button onClick={showNavbar} className="nav-btn nav-close-btn"><CloseOutlinedIcon /></button>
                </nav>
                    <button onClick={showNavbar} className="nav-btn"><MenuOutlinedIcon /></button>
                </div>
              </div>
            </div>
         </div>
         </>
    );
};

const Header_Navigation = () => {
    return (
        <>
            <Header />
            <Navigation />
        </>
    );
};

export default Header_Navigation;