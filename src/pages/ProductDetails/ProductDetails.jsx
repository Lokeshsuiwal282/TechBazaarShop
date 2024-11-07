import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import './ProductDetailsStyle.css';
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Button } from "bootstrap";

import Products from "../../components/product";


const ProductDetails = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
      setShowMore(!showMore);
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        Fade: true,
        arrows: true,
      };

    const product = [
        {
            id: 1,
            label: 'New',
            image: '\\src\\assets\\images\\Prpduct-images\\product01.png',
            sliderImages: [
                '\\src\\assets\\images\\Product-images\\product01.png',
                '\\src\\assets\\images\\Product-images\\product04.png',
                '\\src\\assets\\images\\Product-images\\product03.png',
                '\\src\\assets\\images\\Product-images\\product08.png',
                '\\src\\assets\\images\\Product-images\\product03.png',
                '\\src\\assets\\images\\Product-images\\product02.png',
                '\\src\\assets\\images\\Product-images\\product09.png'
            ],
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
            serise: 'Inspiron 3520',
            model_number: '0IN352010031RINB1M',
            color1: 'Black',
            color2: 'sliver',
            warranty: '1 Year Onsite Warranty',
            delivery: '10KM in Area',
        }
    ]
    return (
        <main className="main" >
            <div className="page-headers breadcrumb-wrap">
                <div className="container-flude">
                    <div className="breadcrumb">
                        <Link to="/"><WindowIcon /> Home</Link>
                        <span><ArrowForwardIosOutlinedIcon /></span>
                        <Link to="/">All Categories</Link>
                        <span><ArrowForwardIosOutlinedIcon /> Laptos</span>
                        <span><ArrowForwardIosOutlinedIcon /> Product Details</span>
                    </div>
                </div>
            </div>
            <div className="container-md mb-30" style={{ transform: 'none' }}>
                {product.map((product) => (
                    <div className="row" style={{ transform: 'none' }}>
                        <div className="col-xl-11 col-lg-12 m-auto" style={{ transform: 'none' }}>
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50 mt-30">
                                    <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5 product-left-data">
                                        <div className="detail-gallery slider-container">
                                            <Slider asNavFor={nav2} ref={sliderRef1}>
                                                {product.sliderImages.map((image, index) => (
                                                    <div key={index} className="product-image-slider">
                                                        <InnerImageZoom
                                                            src={image}
                                                            zoomType="hover"
                                                            zoomScale={2}
                                                            alt={`product-slider-${index}`}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>

                                            <div className="draggable">
                                                <Slider
                                                    asNavFor={nav1}
                                                    ref={sliderRef2}
                                                    slidesToShow={5}
                                                    swipeToSlide={true}
                                                    focusOnSelect={true}
                                                >
                                                    {product.sliderImages.map((image, index) => (
                                                        <div key={index} className="zoom-slider">
                                                            <img src={image} className="zoom-images" alt={`thumbnail-${index}`} />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                        <div className="detail-extralink">
                                            <div className="detail-gallery-button product-add-button">
                                                <button type="submit" className=""><ShoppingCartOutlinedIcon /> Add to cart</button>

                                            </div>
                                            <div className="detail-gallery-button product-buy-button">

                                                <button type="submit" className=""><BoltOutlinedIcon /> Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <div className="detail-info pr-30 pl-30">
                                            <span className="stock-status out-stock">{product.label}</span>
                                            <h4 className="title-detail">{product.title}</h4>
                                            <div className="product-detail-rating">
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating">
                                                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted">{product.rating_number} Ratings &amp; {product.review} reviews</span>
                                                </div>
                                            </div>
                                            <div className="detail-info-special">
                                                <span>Special price</span>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price text-brand">₹{product.price}</span>
                                                    <span>
                                                        <span className="save-price font-md color3 ml-15">{product.offer}% Off</span>
                                                        <span className="old-price font-md ml-15">₹{product.oldPrice}/-</span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="font-xs">
                                                <ul className="mr-50 float-start">
                                                    <li className="mb-3">Series: <span className="text-brand text-information-data">{product.serise}</span></li>
                                                    <li className="mb-3">Model Number: <a href="#" className="text-information-data">{product.model_number}</a></li>
                                                    <li className="mb-3">Color: <a href="#" className="text-information-data" rel="tag">{product.color1}</a>, <a href="#" rel="tag">{product.color2}</a></li>
                                                    <li className="mb-3"> Warranty: <span className="text-brand text-information-data">{product.warranty}</span> <a href="#">Know More</a></li>
                                                    <li className="mb-3">Delivery: <span className="text-brand text-information-data">{product.delivery}</span></li>
                                                </ul>
                                            </div>

                                            <div className="specifications">
                                                <h2>Specifications</h2>
                                                <p className="specifications-line"></p>
                                                <div className="specifications-section">
                                                    <h3>General</h3>
                                                    <p>Sales Package: <span className="text-information-data">Laptop, Power Adaptor, User Guide, Warranty Documents</span></p>
                                                    <p>Model Number: <span className="text-information-data">0IN35201003IRNB1M</span></p>
                                                    <p>Part Number:  <span className="text-information-data">0IN35201003IRNB1M</span></p>
                                                    <p>Model Name: <span className="text-information-data"> New Inspiron 15 Laptop</span> </p>
                                                    <p>Series:  <span className="text-information-data"> Inspiron 3520</span></p>
                                                    <p>Color:  <span className="text-information-data"> Carbon Black</span></p>
                                                    <p>Type:  <span className="text-information-data"> Thin and Light Laptop</span></p>
                                                    <p>Suitable For:  <span className="text-information-data"> Processing & Multitasking</span></p>
                                                </div>
                                                <p className="specifications-line"></p>
                                                {showMore && (
                                                    <>
                                                    <div className="specifications-section">
                                                        <h3>Processor And Memory Features</h3>
                                                        <p>Processor Brand: <span className="text-information-data"> Intel</span></p>
                                                        <p>Processor Name: <span className="text-information-data"> Core i5</span></p>
                                                        <p>Processor Generation: <span className="text-information-data"> 12th Gen</span></p>
                                                        <p>SSD: <span className="text-information-data"> Yes</span></p>
                                                        <p>SSD Capacity: <span className="text-information-data"> 512 GB</span></p>
                                                        <p>RAM: <span className="text-information-data"> 8 GB</span></p>
                                                        <p>RAM Type: <span className="text-information-data"> DDR4</span></p>
                                                        <p>Processor Variant: <span className="text-information-data"> 1235U</span></p>
                                                        <p>Clock Speed: <span className="text-information-data"> Base Frequency 3.30 GHz, Max Turbo Boost Frequency Up to 4.40 GHz</span></p>
                                                        <p>Graphic Processor: <span className="text-information-data"> Intel Integrated UHD</span></p>
                                                        <p>Number of Cores: <span className="text-information-data"> 10</span></p>
                                                        <p>Storage Type: <span className="text-information-data"> SSD</span></p>
                                                    </div>
                                                    <p className="specifications-line"></p>

                                                    <div className="specifications-section">
                                                        <h3>Operating System</h3>
                                                        <p><span className="text-information-data"> Operating System: Windows 11 Home</span></p>
                                                        <p><span className="text-information-data"> Supported Operating System: Windows 11 Home</span></p>
                                                    </div>
                                                    <p className="specifications-line"></p>

                                                    <div className="specifications-section">
                                                        <h3>Port And Slot Features</h3>
                                                        <p>Mic In: <span className="text-information-data"> Yes</span></p>
                                                        <p>USB Port:<span className="text-information-data">  2 x USB 3.2 Gen 1 ports, 1 x USB 2.0 port</span></p>
                                                        <p>HDMI Port:<span className="text-information-data">  1 x HDMI 1.4</span></p>
                                                    </div>
                                                    <p className="specifications-line"></p>

                                                    <div className="specifications-section">
                                                        <h3>Display And Audio Features</h3>
                                                        <p>Touchscreen:<span className="text-information-data">No</span> </p>
                                                        <p>Screen Size: <span className="text-information-data">39.62 cm (15.6 Inch)</span></p>
                                                        <p>Screen Resolution:<span className="text-information-data"> 1920 x 1080 Pixel</span></p>
                                                    </div>
                                                <p className="specifications-line"></p>

                                                    </>
                                                )}

                                                <button onClick={handleReadMore} className="read-more-button">
                                                    {showMore ? "Show Less" : "Read More"}
                                                </button>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="container-md">
                <div className="relative_product">
                    <h3>Relative Products</h3>
                    <Slider {...settings} className="">
                        <div className="relative-products-item">
                            <Products />
                        </div>
                    </Slider>
                </div>
            </div>
        </main>
    )
}

export default ProductDetails;