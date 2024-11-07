import React from "react";
import './footer.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import Creditcard from '../../../src/assets/images/icons/credit-card-icon.png';
import MasterCreditcard from '../../../src/assets/images/icons/master-card-icon.png';
import paypaltcard from '../../../src/assets/images/icons/paypal-card-icon.png';
import visacard from '../../../src/assets/images/icons/visa.png';
import shoppingcard from '../../../src/assets/images/icons/shopping-card-icon.png';

const Footer =() =>{
    return(
        <>
        {/* <!-- FOOTER --> */}
		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">About Us</h3>
								<p><span>Om Computer's Shop</span>Online Shopping India - Buy mobiles, laptops, cameras, watches and e-Gift Cards. Free Shipping & Cash on Delivery</p>
								<ul className="footer-links">
									<li><a href="#"><MyLocationOutlinedIcon /> Jaipur, Rajasthan</a></li>
									<li><a href="#"><PhoneForwardedOutlinedIcon /> +91 9876765432</a></li>
									<li><a href="#"><MarkunreadOutlinedIcon /> omcomputershopnwh72@email.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categories</h3>
								<ul className="footer-links">
									<li><a href="#">Hot deals</a></li>
									<li><a href="#">Laptops</a></li>
									<li><a href="#">Smartphones</a></li>
									<li><a href="#">Cameras</a></li>
									<li><a href="#">Electronices</a></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Information</h3>
								<ul className="footer-links">
									<li><a href="#">About Us</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Orders and Returns</a></li>
									<li><a href="#">Terms & Conditions</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Service</h3>
								<ul className="footer-links">
									<li><a href="#">My Account</a></li>
									<li><a href="#">View Cart</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Track My Order</a></li>
									<li><a href="#">Help</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- bottom footer --> */}
			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a href="#"><img src={Creditcard} alt="Payments"></img></a></li>
								<li><a href="#"><img src={MasterCreditcard} alt="Payments"></img></a></li>
								<li><a href="#"><img src={paypaltcard} alt="Payments"></img></a></li>
								<li><a href="#"><img src={visacard} alt="Payments"></img></a></li>
								<li><a href="#"><img src={shoppingcard} alt="Payments"></img></a></li>
							</ul>
							<span className="copyright">
								Copyright &copy;<script>document.write(new Date().getFullYear());
                                    </script> All rights reserved <FavoriteOutlinedIcon /> by <a href="http://jdsoftdeveloper.kesug.com/?i=1" target="_blank">JD Developer</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /bottom footer --> */}
		</footer>
		{/* <!-- /FOOTER --> */}
        </>
    )
}

export default Footer;