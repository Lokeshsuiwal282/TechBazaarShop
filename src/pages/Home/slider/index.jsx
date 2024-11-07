import React from "react";
import Slider from "react-slick";
import './Slider.css';

import Slider1 from '../../../assets/images/Home-images/slider1.webp';
import Slider2 from '../../../assets/images/Home-images/slider2.webp';
import Slider3 from '../../../assets/images/Home-images/slider3.png';
import Slider4 from '../../../assets/images/Home-images/slider4.png';
import { Fade } from "@mui/material";


const HomeSlider =() =>{
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        Fade: true,
        arrows: true,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

    return(
        <section className="homeSlider">
            <div className="container-fluid slider-container">
                <Slider {...settings} className="home-slider-menu">
                    <div className="item">
                        <img src={Slider1} />
                    </div>
                    <div className="item">
                        <img src={Slider2} />
                    </div>
                    <div className="item">
                        <img src={Slider3} />
                    </div>
                    <div className="item">
                        <img src={Slider4} />
                    </div>
        
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider;