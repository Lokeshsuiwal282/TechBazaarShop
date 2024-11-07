import React from "react";
import './style.css';
import HomeSlider from "./slider/index";
import Featureslider from "../../../src/components/Featureslider";
import Products from "../../../src/components/product";
import ServiceFeature from '../../../src/components/service-feature/service-feature';
import Slider from "react-slick";
import HotProductAds from "../../components/HotProductAds/hotproduct-ads";
import DailyBestProducts from "../../../src/components/daily-best-product/daily-best-product";
import { Link } from "react-router-dom";
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const Home =() =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        Fade: true,
        arrows: true,
      };

    var setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        Fade: true,
        arrows: true,
      };
    
    return (
        <>
            <HomeSlider />
            <ServiceFeature />
            <Featureslider />
            <HotProductAds />

            {/* this is code for Popular Products  */}
            <section className="homeProduct">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd  mb-0 mt-0">Populer Products</h2>
                        <ul className="list list-inline ml-auto filterTab">
                            <li className="list-inline-item">
                                <a className="cursor">all</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Laptops</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Mouse</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Keyboard</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Printers</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">LED</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Cameras</a>
                            </li>
                        </ul>
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
            </section>
            {/* this is code end for Popular Products  */}

             {/* this is code for Daily Best Sells Products  */}
             {/* <section className="home-daily-best-Product">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd  mb-0 mt-0">Daily Best Sells Products</h2>
                        <ul className="list list-inline filterTab">
                            <li className="list-inline-item">
                                <a className="cursor">New Products</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Popular Products</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Featured</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="daily-best-product-sells">
                                <div className="row">
                                    <div className="col prodcut-items">
                                        <div className="item">
                                            <Link>
                                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>
                                            </Link>
                                        </div>
                                        <div className="item">
                                            <Link>
                                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col prodcut-items">
                                        <div className="item">
                                            <Link>
                                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>
                                            </Link>
                                        </div>
                                        <div className="item">
                                            <Link>
                                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Slider {...settings} className="daily-slider-menu">
                                <div className="productRow">
                                    <div className="item">
                                        <DailyBestProducts />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section> */}
             {/* this is code end for Daily Best Sells Products  */}

            {/* SECTION */}
            <div className="section">
                <div className="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Top selling</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-3" class="products-slick-nav"></div>
                                </div>
                            </div>
                            <div class="products-widget-slick" data-nav="#slick-nav-3">
                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product02.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>

                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product03.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>

                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product01.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product09.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product06.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Top selling</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-4" class="products-slick-nav"></div>
                                </div>
                            </div>

                            <div class="products-widget-slick" data-nav="#slick-nav-4">
                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product01.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product08.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product02.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product05.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product03.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="clearfix visible-sm visible-xs"></div>

                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Top selling</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-5" class="products-slick-nav"></div>
                                </div>
                            </div>

                            <div class="products-widget-slick" data-nav="#slick-nav-5">
                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product07.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product09.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product03.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product02.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="src\assets\images\Product-images\product01.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* /SECTION */}

            {/* NEWSLETTER */}
            <div id="newsletter" className="section">
                {/* container */}
                <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="newsletter">
                        <p>
                        Sign Up for the <strong>NEWSLETTER</strong>
                        </p>
                        <form>
                        <input className="input" type="email" placeholder="Enter Your Email" />
                            <button className="newsletter-btn">
                                <MarkEmailReadOutlinedIcon /> Subscribe
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
                {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /NEWSLETTER */}

        </>
    )
}

export default Home;