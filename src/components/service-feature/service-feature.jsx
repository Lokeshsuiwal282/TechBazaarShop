import React from "react";
import './service-feature.css'

const ServiceFeature=() => {
    return (
        <div class="service bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="item">
                            <div class="photo">
                                <img src="src\assets\images\service-13.png" width="150px" alt="EASY RETURNS" />
                            </div>
                            <h3 className="item-hadding-name">EASY RETURNS</h3>
                            <p className="item-hadding-p">
                                Return Any Products AFTER 7 Days and Daily Mega Discounts.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item">
                            <div class="photo">
                                <img src="src\assets\images\service-14.png" width="150px" alt="FREE SHIPPING" />
                                </div>
                            <h3 className="item-hadding-name">FREE SHIPPING</h3>
                            <p className="item-hadding-p"> 
                            Free delivery and Enjoy Free Shipping in Rajasthan.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item">
                            <div class="photo">
                                <img src="src\assets\images\service-15.png" width="150px" alt="SECURE CHECKOUT" />
                                </div>
                            <h3 className="item-hadding-name">SECURE CHECKOUT</h3>
                            <p className="item-hadding-p">
                                Providing Secure Checkout Options For All Orders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceFeature;