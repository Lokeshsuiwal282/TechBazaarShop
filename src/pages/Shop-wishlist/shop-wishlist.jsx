import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './cartProductstyle.css';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';

// this is import icons 
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// this are import images 
import producti_imag from '../../../src/assets/images/Product-images/product01.png';
import producti_imag2 from '../../../src/assets/images/Product-images/product08.png';
import producti_imag3 from '../../../src/assets/images/Product-images/product07.png';



// Sample initial cart data
const initialCart = [
    {
        id: 1,
        name: 'DELL Inspiron 3520 Intel Core i5 12th Gen',
        image: '../../../../src/assets/images/Product-images/product01.png', // Replace with actual image URL or import
        unitPrice: 24599,
        quantity: 1,
        rating: 4.5,
    },
    // Add more products as needed
];

const Shop_Wishlist_Products = () => {

    // Calculate total price
    // const totalPrice = initialCart.unitPrice * setinputValue(inputValue); 

    return (
        <>
            {initialCart.map((initialCart) => (
                <main className="main" >
                    <div className="page-headers breadcrumb-wrap">
                        <div className="container-flude">
                            <div className="breadcrumb">
                                <Link to="/"><WindowIcon /> Home</Link>
                                <span><ArrowForwardIosOutlinedIcon /></span>
                                <Link to="/listing-Page/product-details">Check-out</Link>
                                <span><ArrowForwardIosOutlinedIcon /></span>Shop WishList Product Details
                            </div>
                        </div>
                    </div>
                    <section className="cartSection">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex align-items-center w-100">
                                    <div className="left">
                                        <h1 className="hd mb-2">Your WishList</h1>
                                        <p>There are <span className="text-brand">3</span> products in your carts</p>
                                    </div>
                                    <span className="ml-auto clear-cart-icons"><DeleteOutlineOutlinedIcon /> Clear Cart</span>
                                </div>
                                <div className="cartWrapper mt-4  cart-information ">
                                    <div className="row">
                                        {/* <h4 className="product-heading">Products-Items</h4> */}
                                        <div className="product-item-list">
                                            <div className="col-md-10">
                                                <div className="products-information">
                                                    <div className="d-flex align-items-center product-images">
                                                        <div className="img-itmes">
                                                            <Checkbox />
                                                            <img src={producti_imag} className="img" />
                                                        </div>
                                                    </div>
                                                    <div className="product-info pl-5">
                                                        <h5><Link to='/listing-Page'>DELL Inspiron 3520 Intel Core i5 12th Gen</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />(4.5)
                                                        <div className="product-card__pricing">
                                                            <span className="price">₹25,499</span>
                                                            <span className="old-price">₹27,599</span>
                                                        </div>
                                                        <div className="save-price">
                                                            <span className="price">You Save ₹2200</span>
                                                        </div>
                                                        <div className="product-detile">
                                                            <p>Sold by: <span>Om Computer's</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="remove-item">
                                                    <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>

                                                </div>
                                                <h4 className="product-card__add-btn btn mb-10 w-21 mb-5" style={{ background: '#DEF9EC', color: '#3BB77E' }}>In Stock
                                                </h4>

                                                <a href="#" className="product-card__add-btn btn mb-10 w-21">Add to Cart <LogoutOutlinedIcon /></a>

                                            </div>
                                        </div>
                                        <p className="line-bar"></p>
                                        <div className="product-item-list">
                                            <div className="col-md-10">
                                                <div className="products-information">
                                                    <div className="d-flex align-items-center product-images">
                                                        <div className="img-itmes">
                                                            <Checkbox />
                                                            <img src={producti_imag2} className="img" />
                                                        </div>
                                                    </div>
                                                    <div className="product-info pl-5">
                                                        <h5><Link to='/listing-Page'>ASUS Vivobook 16X for Creator, Intel Core i5 12th Gen 12500H</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />(4.5)
                                                        <div className="product-card__pricing">
                                                            <span className="price">₹59,990</span>
                                                            <span className="old-price">₹84,990</span>
                                                        </div>
                                                        <div className="save-price">
                                                            <span className="price">You Save ₹25000</span>
                                                        </div>
                                                        <div className="product-detile">
                                                            <p>Sold by: <span>Om Computer's</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>
                                                <h4 className="product-card__add-btn btn mb-10 w-21 mb-5" style={{ background: '#DEF9EC', color: '#3BB77E' }}>In Stock
                                                </h4>

                                                <a href="#" className="product-card__add-btn btn mb-10 w-21">Add to Cart <LogoutOutlinedIcon /></a>

                                            </div>
                                        </div>

                                        <p className="line-bar"></p>
                                        <div className="product-item-list">
                                            <div className="col-md-10">
                                                <div className="products-information">
                                                    <div className="d-flex align-items-center product-images">
                                                        <div className="img-itmes">
                                                            <Checkbox />
                                                            <img src={producti_imag3} className="img" />
                                                        </div>
                                                    </div>
                                                    <div className="product-info pl-5">
                                                        <h5><Link to='/listing-Page'>vivo T3 Pro 5G (Emerald Green, 256 GB)  (8 GB RAM)</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />(4.5)
                                                        <div className="product-card__pricing">
                                                            <span className="price">₹26,999</span>
                                                            <span className="old-price">₹31,999</span>
                                                        </div>
                                                        <div className="save-price">
                                                            <span className="price">You Save ₹5000</span>
                                                        </div>
                                                        <div className="product-detile">
                                                            <p>Sold by: <span>Vivo Shop</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>
                                                <h4 className="product-card__add-btn btn mb-10 w-21 mb-5" style={{ background: '#DEF9EC', color: '#3BB77E' }}>In Stock
                                                </h4>

                                                <a href="#" className="product-card__add-btn btn mb-10 w-21">Add to Cart <LogoutOutlinedIcon /></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                </main>
            ))}
        </>
    )
}

export default Shop_Wishlist_Products;