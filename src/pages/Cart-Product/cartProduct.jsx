import React, { useState } from "react";
import { Link } from "react-router-dom";
import './cartProductstyle.css';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import Quantity_Product from "../../components/quantity-product-number/quantity-product";
// this is import icons 
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
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

const Cart_Products = () => {
    
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
                                <span><ArrowForwardIosOutlinedIcon /></span>Cart Product Details
                            </div>
                        </div>
                    </div>
                    <section className="cartSection">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="d-flex align-items-center w-100">
                                        <div className="left">
                                            <h1 className="hd mb-2">Your Cart</h1>
                                            <p>There are <span className="text-brand">3</span> products in your carts</p>
                                        </div>
                                        <span className="ml-auto clear-cart-icons"><DeleteOutlineOutlinedIcon /> Clear Cart</span>
                                    </div>
                                    <div className="cartWrapper mt-4  cart-information ">
                                        <div className="row">
                                            {/* <h4 className="product-heading">Products-Items</h4> */}
                                            <div className="product-item-list">
                                                <div className="col-md-8">
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
                                                <div className="col-md-4">
                                                    <div className="remove-item">
                                                    <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>

                                                    </div>
                                                    <div className="romove-items">
                                                        <p>Total Price: <span className="price">₹25,499</span></p>
                                                    </div>
                                                    <div className="item_quantity pt-4 pb-4 d-flex align-items-center">
                                                        <Quantity_Product />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line-bar"></p>
                                            <div className="product-item-list">
                                                <div className="col-md-8">
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
                                                <div className="col-md-4">
                                                    <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>
                                                    <div className="romove-items">
                                                        <p>Total Price: <span className="price">₹59,990</span></p>
                                                    </div>
                                                    <div className="item_quantity pt-4 pb-4 d-flex align-items-center">
                                                        <Quantity_Product />
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="line-bar"></p>
                                            <div className="product-item-list">
                                                <div className="col-md-8">
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
                                                <div className="col-md-4">
                                                    <span className="ml-auto clear-cart-icons mb-3"><DeleteOutlineOutlinedIcon />Remove</span>
                                                    <div className="romove-items">
                                                        <p>Total Price: <span className="price">₹26,999</span></p>
                                                    </div>
                                                    <div className="item_quantity pt-4 pb-4 d-flex align-items-center">
                                                        <Quantity_Product />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-50">
                                        <div className="col-lg-7">
                                            <div className="calculate-shiping p-40 border-radius-15 border">
                                                <h4 className="mb-10">Calculate Shipping</h4>
                                                <p className="mb-30"><span className="font-lg text-muted">Flat rate:</span><strong className="text-brand">5%</strong></p>
                                                <form className="field_form shipping_calculator">
                                                    <div className="form-row">
                                                        <div className="form-group col-lg-12" >
                                                            <div className="custom_select" >
                                                                <select className="form-control select-active w-100 select2-hidden-accessible">
                                                                    <option value="" data-select2-id="9">United Kingdom</option>
                                                                    <option value="AX" data-select2-id="18">Aland Islands</option>
                                                                    <option value="AF" data-select2-id="19">Afghanistan</option>
                                                                    <option value="AL" data-select2-id="20">Albania</option>
                                                                    <option value="DZ" data-select2-id="21">Algeria</option>
                                                                    <option value="AD" data-select2-id="22">Andorra</option>
                                                                    <option value="AO" data-select2-id="23">Angola</option>
                                                                    <option value="AI" data-select2-id="24">Anguilla</option>
                                                                    <option value="AQ" data-select2-id="25">Antarctica</option>
                                                                    <option value="AG" data-select2-id="26">Antigua and Barbuda</option>
                                                                    <option value="AR" data-select2-id="27">Argentina</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-row row">
                                                        <div className="form-group col-lg-6">
                                                            <input required="required" placeholder="State / Country" name="name" type="text" />
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <input required="required" placeholder="PostCode / ZIP" name="name" type="text" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="p-40">
                                                <h4 className="mb-10">Apply Coupon</h4>
                                                <p className="mb-30"><span className="font-lg text-muted">Using A Promo Code?</span></p>
                                                <form action="#">
                                                    <div className="d-flex justify-content-between">
                                                        <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" />
                                                        <button className="btn product-card__add-btn md-4"><GridViewOutlinedIcon /> Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 pl-5">
                                    <div className="card p-4">
                                        <h5>Payment Details</h5>
                                        <div className="border p-md-4 cart-totals ml-30">
                                            <div className="table-responsive">
                                                <table className="table no-border">
                                                    <tbody>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                <h6 className="text-muted">MRP Total</h6>
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <h4 className="text-brand text-end">₹25499</h4>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                <h6 className="text-muted">Product Discount</h6>
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <h4 className="old-price text-end">₹2599</h4>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="col" colspan="2">
                                                                <div className="divider-2 mt-10 mb-10"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                <h6 className="text-muted">Delivery Fee</h6>
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <h5 className="text-brand text-end">Free </h5></td></tr> <tr>
                                                            <td className="cart_total_label">
                                                                <h6 className="text-muted">Delivery Fee (Scheduled Delivery)</h6>
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <h5 className="text-heading text-end">Rajasthan-Indai </h5></td></tr> <tr>
                                                            <td scope="col" colspan="2">
                                                                <div className="divider-2 mt-10 mb-10"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                <h6 className="text-muted">Total</h6>
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <h4 className="text-brand text-end">₹25499</h4>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="#" className="product-card__add-btn btn mb-20 w-100">Place Order <LogoutOutlinedIcon /></a>
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

export default Cart_Products;