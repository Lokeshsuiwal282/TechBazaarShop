import React from "react";
import { Link } from "react-router-dom";
import './ProductDetailsStyle.css';
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Rating from '@mui/material/Rating';

const ProductDetails =() => {

    const ProductDetails = [
        {
            id: 1,
            label: 'Sale',
            image: './src\\assets\\images\\features-images\\original-imah4qscsfg5bgm.webp', // Add actual image URL
            category: 'Laptop',
            title: 'DELL Inspiron 3520 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) 0IN352010031RINB1M Thin and Light Laptop  (15.6 Inch, Carbon Black, 1.65 Kg, With MS Office))',
            rating: 4.0,
            rating_number: 100,
            review: 22,
            offer: 25,
            Paragraph: '',
            seller: 'HP Backlit',
            price: 24999.00,
            oldPrice: 32599.00,
        }
    ]
    return(
        <main className="main" >
            <div className="page-header breadcrumb-wrap">
                <div className="container-flude">
                    <div className="breadcrumb">
                        <Link to="/"><WindowIcon /> Home</Link>
                        <span><ArrowForwardIosOutlinedIcon /></span> 
                            <Link to="/">Laptops</Link>
                        <span><ArrowForwardIosOutlinedIcon /></span>Product Details
                    </div>
                </div>
            </div>
            <div className="container mb-30" style={{ transform: 'none' }}>
            {ProductDetails.map((product) => (

                <div className="row" style={{ transform: 'none' }}>
                    <div className="col-xl-11 col-lg-12 m-auto" style={{ transform: 'none' }}>
                        <div className="product-detail accordion-detail">
                            <div className="row mb-50 mt-30">
                            <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                <span className="zoom-icon"><SearchOutlinedIcon /></span>
                                <div className="product-image-slider slick-initialized slick-slider">
                                    <div className="slick-list draggable">
                                        <div className="slick-track productZoom">
                                                <InnerImageZoom zoomType="hover" zoomScale={2} src="src\assets\images\Prpduct-images\product07.png" />
                                        </div>
                                    </div>
                                </div>
                                {/* THUMBNAILS */}
                                <div className="slider-nav-thumbnails slick-initialized slick-slider">
                                    <button type="button" className="slick-prev slick-arrow"><i className="fi-rs-arrow-small-left"></i></button>
                                    <div className="slick-list draggable">
                                    <div className="slick-track" style={{ opacity: 1, width: '2142px', transform: 'translate3d(-476px, 0px, 0px)' }}>
                                        {['thumbnail-6.jpg', 'thumbnail-7.jpg', 'thumbnail-8.jpg', 'thumbnail-9.jpg', 'thumbnail-3.jpg', 'thumbnail-4.jpg', 'thumbnail-5.jpg'].map((thumb, index) => (
                                        <div key={index} className="slick-slide" style={{ width: '99px' }} aria-hidden="true">
                                            <img src={`assets/imgs/shop/${thumb}`} alt="product thumbnail" />
                                        </div>
                                        ))}
                                    </div>
                                    </div>
                                    <button type="button" className="slick-next slick-arrow"><i className="fi-rs-arrow-small-right"></i></button>
                                </div>
                                </div>
                                {/* End Gallery */}
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12">
                                <div className="detail-info pr-30 pl-30">
                                <span className="stock-status out-stock">{product.label}</span>
                                <h4 className="title-detail">{product.title}</h4>
                                <div className="product-detail-rating">
                                    <div className="product-rate-cover text-end">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{ width: '90%' }}>
                                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                        <span className="font-small ml-5 text-muted">{product.rating_number} Ratings &amp; {product.review} reviews</span>
                                    </div>
                                </div>
                                <div class="_2lX4N0"><span>Special price</span></div>
                                <div className="clearfix product-price-cover">
                                    <div className="product-price primary-color float-left">
                                    <span className="current-price text-brand">₹{product.price}</span>
                                    <span>
                                        <span className="save-price font-md color3 ml-15">{product.offer}% Off</span>
                                        <span className="old-price font-md ml-15">₹{product.oldPrice}</span>
                                    </span>
                                    </div>
                                </div>
                         
                                {/* <div className="attr-detail attr-size mb-30">
                                    <strong className="mr-10">RAM:</strong>
                                    <ul className="list-filter size-filter font-small">
                                    {['4GB', '8GB', '16GB', '32GB'].map((size, index) => (
                                        <li key={index} className={size === '8GB' ? 'active' : ''}>
                                        <a href="#">{size}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <div className="attr-detail attr-size mb-30">
                                    <strong className="mr-10">Storage:</strong>
                                    <ul className="list-filter size-filter font-small">
                                    {['128GB', '256GB', '16GB', '32GB'].map((size, index) => (
                                        <li key={index} className={size === '8GB' ? 'active' : ''}>
                                        <a href="#">{size}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div> */}
                                <div className="detail-extralink mb-50">
                                    <div className="detail-qty border radius">
                                    <a href="#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                    <input type="text" name="quantity" className="qty-val" defaultValue="1" min="1" />
                                    <a href="#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                    </div>
                                    <div className="product-extra-link2">
                                    <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                    <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                </div>
                                <div className="font-xs">
                                    <ul className="mr-50 float-start">
                                    <li className="mb-5">Type: <span className="text-brand">Organic</span></li>
                                    <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2024</span></li>
                                    <li>LIFE: <span className="text-brand">70 days</span></li>
                                    </ul>
                                    <ul className="float-start">
                                    <li className="mb-5">SKU: <a href="#">FWM15VKT</a></li>
                                    <li className="mb-5">Tags: <a href="#" rel="tag">Snack</a>, <a href="#" rel="tag">Organic</a>, <a href="#" rel="tag">Brown</a></li>
                                    <li>Stock:<span className="in-stock text-brand ml-5">8 Items In Stock</span></li>
                                    </ul>
                                </div>
                                </div>
                                

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        ))}

            </div>

        </main>
    )
}

export default ProductDetails;