import React from "react";
import Slider from "react-slick";
import './feature.css'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';


const Featureslider =() =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1696, // max-width: 1201px
                settings: {
                  slidesToShow: 6,
                },
              },
          {
            breakpoint: 1396, // max-width: 1201px
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1024, // max-width: 991px
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 796, // max-width: 991px
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 496, // max-width: 430px
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };

    const productTitle1 =
      '14 Intel Core i5 8th Gen - (8 GB/256 GB SSD/Window 10 Home)';
    const SamsungGalaxy = 'Samsung Galaxy S23 Ultra 5G AI Smartphone Green, 12GB, 256GB Storage';

    const limitCharacters = (text, limit) => {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
      };

    return(
        <div className="feature-slider-Section">
            <div className="container-fluid">
                <h3 className="hd">Featured Products</h3>
                <Slider {...settings} className="feature-slider-menu">
                    <div className="item">
                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\delllaptops.webp"></img>
                            </div>
                            <div className="product-card__details">
                                <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>Dell Latitude 5410  </Link></div>
                                    <div className="product-card__rating md-3">
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>

                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price"> ₹89,900.00</span>
                                    </div>
                                    <div className="product-card__title">{limitCharacters(productTitle1, 55)}</div>
                                </div>
                      
                    </div>
                    <div className="item">
                
                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\mousewireless.webp"></img>
                            </div>
                            <div className="product-card__details">
                                <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>Portronics POR</Link></div>
                                    <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price">₹1,24,900.00</span>
                                    </div>
                                    <div className="product-card__title">Wireless Optical Mouse(2.4GHz Wireless, Bluetooth, Black)</div>
                                </div>
                      
                    </div>
                    <div className="item">
                      
                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\original-imah4qscsfg5bgm.webp"></img>
                            </div>
                            <div className="product-card__details">
                                <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>HP Backlit</Link></div>
                                    <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price">₹1,24,900.00</span>
                                    </div>
                                    <div className="product-card__title">Core i5 8th Gen - (8GB/512GB SSD/Windows11 Home)</div>
                                </div>
                     
                    </div>
                    <div className="item">
                      
                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\toad-one-bluetooth-wireless.webp"></img>
                            </div>
                            <div className="product-card__details">
                                <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>Portronics Toad</Link></div>
                                    <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price">₹1,24,900.00</span>
                                    </div>
                                    <div className="product-card__title">Wireless Optical Mouse  (2.4GHz Wireless, Bluetooth, White)</div>
                                </div>
                    
                    </div>
                    <div className="item">

                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>  
                            </div>
                                <div className="product-card__details">
                                    <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>Lenovo V14 Intel</Link></div>
                                    <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price">₹1,24,900.00</span>
                                    </div>
                                    <div className="product-card__title">Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home)</div>
                                </div>
        
                    </div>
                    <div className="item">
                        <div className="product-card__image">
                            <img src="src\assets\images\icons\moblie.webp" alt="Apple iPhone 13 (128GB) - Starlight"/>
                        </div>
  
                            <div className="product-card__details">
                                <div className="product-card__offer">50% off</div>
                                <div className="product-card__festival"><Link to='/listing-Page'>Great Indian</Link></div>
                                <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                <div className="product-card__price">
                                    <span className="price">₹74,999</span>
                                    <span> M.R.P:</span>
                                    <span className="original-price old-price">₹1,24,900.00</span>
                                </div>
                                <div className="product-card__title">{limitCharacters(SamsungGalaxy, 55)}</div>
                            </div>
                    </div>
                    <div className="item">
                            <div className="product-card__image">
                                <img src="src\assets\images\features-images\v14-thin-and-light-laptop-lenovo.webp"></img>  
                            </div>
                                <div className="product-card__details">
                                    <div className="product-card__offer">24% off</div>
                                    <div className="product-card__festival"><Link to='/listing-Page'>Lenovo V14 Intel</Link></div>
                                     <div className="product-card__rating">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </div>
                                    <div className="product-card__price">
                                        <span className="price">₹74,999</span>
                                        <span> M.R.P:</span>
                                        <span className="original-price old-price">₹1,24,900.00</span>
                                    </div>
                                    <div className="product-card__title">Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home)</div>
                                </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}


export default Featureslider;