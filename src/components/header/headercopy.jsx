import React from "react";


const Header = () => {
    return (
        <header id="masthead" class="site-header desktop-shadow-disable mobile-shadow-enable mobile-nav-enable" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
            <div class="header-top header-wrapper hide-mobile">
                <div class="container">
                    <div class="column column-left">
                        <nav class="site-menu horizontal">
                            <ul id="menu-top-left" class="menu"><li id="menu-item-1893" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1893"><a href="https://klbtheme.com/bacola/about-us/">About Us</a></li>
                                <li id="menu-item-1892" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16 current_page_item menu-item-1892"><a href="https://klbtheme.com/bacola/my-account/" aria-current="page">My account</a></li>
                                <li id="menu-item-1891" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891"><a href="https://klbtheme.com/bacola/wishlist/">Wishlist</a></li>
                                <li id="menu-item-1890" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1890"><a href="https://klbtheme.com/bacola/order-tracking/">Order Tracking</a></li>
                            </ul>					
                        </nav>
                    </div>

                    <div class="column column-right">
                        <div class="topbar-notice">
                            <i class="klbth-icon-secure"></i>
                            <span>100% Secure delivery without contacting the courier</span>
                        </div>
                        <div class="text-content">
                            Need help? Call Us: <a href="tel:0020500"><strong style="color: #2bbef9">+ 0020 500</strong></a>					</div>

                        <div class="header-switchers">
                            <nav class="store-language site-menu horizontal">
                                <ul id="menu-top-right-1" class="menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1832"><a href="#">English</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1838"><a href="#">English</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1833"><a href="#">Spanish</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1834"><a href="#">German</a></li>
                                    </ul>
                                </li>
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1835"><a href="#">USD</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1839"><a href="#">USD</a></li>
                                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1836"><a href="#">INR</a></li>
                                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1837"><a href="#">GBP</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-main header-wrapper">
                <div class="container">
                    <div class="column column-left">
                        <div class="header-buttons hide-desktop">
                            <div class="header-canvas button-item">
                                <a href="#">
                                    <i class="klbth-icon-menu-thin"></i>
                                </a>
                            </div>
                        </div>
                        <div class="site-brand">
                            <a href="https://klbtheme.com/bacola/" title="Bacola – Grocery Market and Food Theme">
                                <img class="desktop-logo hide-mobile" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png" alt="Bacola – Grocery Market and Food Theme" />

                                <img class="mobile-logo hide-desktop" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png" alt="Bacola – Grocery Market and Food Theme" />
                                <span class="brand-description">Online Grocery Shopping Center</span>
                            </a>
                        </div>
                    </div>
                    <div class="column column-center">
                        <div class="header-location site-location hide-mobile">
                            <a href="#">
                                <span class="location-description">Your Location</span>
                                <div class="current-location">Select a Location</div>
                            </a>
                        </div>

                        <div class="header-search">
                            <form action="https://klbtheme.com/bacola/" class="search-form" role="search" method="get" id="searchform">
                                <input type="search" value="" name="s" placeholder="Search for products..." autocomplete="off" />
                                <button type="submit"><i class="klbth-icon-search"></i></button>
                                <input type="hidden" name="post_type" value="product" />
                            </form>											</div>
                    </div>
                    <div class="column column-right">
                        <div class="header-buttons">
                            <div class="header-login button-item bordered">
                                <a href="https://klbtheme.com/bacola/my-account/">
                                    <div class="button-icon"><i class="klbth-icon-user"></i></div>
                                </a>
                            </div>

                            <div class="header-cart button-item bordered">
                                <a href="https://klbtheme.com/bacola/cart/">

                                    <div class="cart-price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>0.00</bdi></span></div>


                                    <div class="button-icon"><i class="klbth-icon-shopping-bag"></i></div>

                                    <span class="cart-count-icon">0</span>


                                </a>
                                <div class="cart-dropdown hide">
                                    <div class="cart-dropdown-wrapper">

                                        <div class="fl-mini-cart-content">


                                            <div class="cart-empty">
                                                <div class="empty-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.028 280.028" width="280.028" height="80.028">
                                                        <path class="c-01" d="M35.004 0h210.02v78.758H35.004V0z" fill="#d07c40"></path>
                                                        <path class="c-02" d="M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z" fill="#f4b459"></path>
                                                        <path class="c-03" d="M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z" fill="#f4b459"></path>
                                                        <path class="c-04" d="M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z" fill="#e3911c"></path>
                                                        <path class="c-05" d="M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z" fill="#cf984a"></path>
                                                        <path class="c-06" d="M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z" fill="#cf984a"></path>
                                                        <path class="c-07" d="M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z" fill="#fdfbf7"></path></svg>
                                                </div>
                                                <div class="empty-text">No products in the cart.</div>
                                            </div>


                                        </div>



                                        <div class="cart-noticy">
                                            We reduce shipping prices to only 2.49 €!										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="header-nav header-wrapper hide-mobile">
                <div class="container">


                    <div class="all-categories locked">
                        <a href="#" data-toggle="collapse" data-target="#all-categories">
                            <i class="klbth-icon-menu-thin"></i>
                            <span class="text">ALL CATEGORIES</span>

                            <div class="description">TOTAL 63 PRODUCTS</div>
                        </a>

                        <div class="dropdown-categories collapse " id="all-categories">
                            <ul id="menu-sidebar-menu-1" class="menu-list"><li class="category-parent parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/"><i class="klbth-icon-apple-juice"></i>Fruits &amp; Vegetables</a>
                                <ul class="sub-menu">
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/cuts-sprouts/">Cuts &amp; Sprouts</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/exotic-fruits-veggies/">Exotic Fruits &amp; Veggies</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/fresh-fruits/">Fresh Fruits</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/fresh-vegetables/">Fresh Vegetables</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/herbs-seasonings/">Herbs &amp; Seasonings</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/packaged-produce/">Packaged Produce</a></li>
                                    <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/party-trays/">Party Trays</a></li>
                                </ul>
                            </li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/meats-seafood/"><i class="klbth-icon-meat"></i> Meats &amp; Seafood</a></li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/breakfast-dairy/"><i class="klbth-icon-boiled-egg"></i> Breakfast &amp; Dairy</a></li>
                                <li class="category-parent parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children"><a href="https://klbtheme.com/bacola/product-category/beverages/"><i class="klbth-icon-cup"></i> Beverages</a>
                                    <ul class="sub-menu">
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/coffee/">Coffee</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/craft-beer/">Craft Beer</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/drink-boxes-pouches/">Drink Boxes &amp; Pouches</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/milk-plant-based-milk/">Milk &amp; Plant-Based Milk</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/soda-pop/">Soda &amp; Pop</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/sparkling-water/">Sparkling Water</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/tea-kombucha/">Tea &amp; Kombucha</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/water/">Water</a></li>
                                        <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/wine/">Wine</a></li>
                                    </ul>
                                </li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/breads-bakery/"><i class="klbth-icon-biscuit"></i> Breads &amp; Bakery</a></li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/frozen-foods/"><i class="klbth-icon-snowflake"></i> Frozen Foods</a></li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/biscuits-snacks/"><i class="klbth-icon-candy"></i> Biscuits &amp; Snacks</a></li>
                                <li class="category-parent  menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/grocery-staples/"><i class="klbth-icon-vegan"></i> Grocery &amp; Staples</a></li>
                                <li class="link-parent  menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?on_sale=onsale"><i class="bottom"></i> Value of the Day</a></li>
                                <li class="link-parent  menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?filter_cat=58,35,31"><i class="bottom"></i> Top 100 Offers</a></li>
                                <li class="link-parent  menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/"><i class="bottom"></i> New Arrivals</a></li>
                            </ul>		</div>

                    </div>

                    <nav class="site-menu primary-menu horizontal">
                        <ul id="menu-menu-2" class="menu"><li class="dropdown  menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children"><a href="https://klbtheme.com/bacola/">Home</a>
                            <ul class="sub-menu">
                                <li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="https://klbtheme.com/bacola/"><span class="text">Home 1</span></a></li>
                                <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-2/"><span class="text">Home 2</span></a></li>
                                <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-3/"><span class="text">Home 3</span></a></li>
                                <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-4/"><span class="text">Home 4</span></a></li>
                                <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-5/"><span class="text">Home 5</span></a></li>
                            </ul>
                        </li>
                            <li class="dropdown mega-menu menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-has-children"><a href="https://klbtheme.com/bacola/shop/">Shop</a>
                                <ul class="sub-menu" style="padding-left: 186.5px; padding-right: 186.5px;">
                                    <li class="dropdown  menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://klbtheme.com/bacola/shop/"><span class="text">Shop Lists</span></a>
                                        <ul class="sub-menu">
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/shop/"><span class="text">Shop Default</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?opt=right-sidebar"><span class="text">Shop Right Sidebar</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=5&amp;opt=wide"><span class="text">Shop Wide</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?shop_view=list_view"><span class="text">List Left Sidebar</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?ft=load-more"><span class="text">Load More Button</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?ft=infinite"><span class="text">Infinite Scrolling</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown  menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/"><span class="text">Product Detail</span></a>
                                        <ul class="sub-menu">
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/"><span class="text">Product Default</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/tomatoes-on-the-vine/"><span class="text">Product Variable</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/foster-farms-takeout-crispy-classic-buffalo-wings/"><span class="text">Product Grouped</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/zevia-kidz-strawberry-lemonade-zero-calorie-soda/"><span class="text">Product External</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/vital-farms-pasture-raised-egg-bites-bacon-cheddar/"><span class="text">Product Downloadable</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/angies-boomchickapop-sweet-salty-kettle-corn/"><span class="text">Product With Video</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown  menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/"><span class="text">Product Types</span></a>
                                        <ul class="sub-menu">
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/"><span class="text">Single Type 1</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/angies-boomchickapop-sweet-salty-kettle-corn/?opt=type2"><span class="text">Single Type 2</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/?opt=type3"><span class="text">Single Type 3</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/organic-white-corn-tortilla-chips/?opt=type4"><span class="text">Single Type 4</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/?opt=vertical"><span class="text">Thumbnails Left</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/organic-white-corn-tortilla-chips/?ft=imgzoom"><span class="text">Zoom Image</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown  menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children"><a href="#"><span class="text">Shop Pages</span></a>
                                        <ul class="sub-menu">
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/cart/"><span class="text">Cart</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/checkout/"><span class="text">Checkout</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16 current_page_item"><a href="https://klbtheme.com/bacola/my-account/"><span class="text">My account</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/wishlist/"><span class="text">Wishlist</span></a></li>
                                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/order-tracking/"><span class="text">Order Tracking</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/?ft=orderonwhatsapp"><span class="text">Order on WhatsApp</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown  menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span class="text">Shop Layouts</span></a>
                                        <ul class="sub-menu">
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=2"><span class="text">Two Columns</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=3"><span class="text">Three Columns</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=3&amp;opt=wide"><span class="text">Three Columns Wide</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=4"><span class="text">Four Columns</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=4&amp;opt=wide"><span class="text">Four Columns Wide</span></a></li>
                                            <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=5&amp;opt=wide"><span class="text">Five Columns wide</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class=" menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/meats-seafood/"><i class="klbth-icon-meat"></i> Meats &amp; Seafood</a></li>
                            <li class=" menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/breads-bakery/"><i class="klbth-icon-biscuit"></i> Bakery</a></li>
                            <li class=" menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/"><i class="klbth-icon-cup"></i> Beverages</a></li>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/blog/">Blog</a></li>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/contact/">Contact</a></li>
                        </ul>			</nav>
                </div>
            </div>


            <nav class="header-mobile-nav">
                <div class="mobile-nav-wrapper">
                    <ul>
                        <li class="menu-item">
                            <a href="https://klbtheme.com/bacola/shop/" class="store">
                                <i class="klbth-icon-store"></i>
                                <span>Store</span>
                            </a>
                        </li>


                        <li class="menu-item">
                            <a href="#" class="search">
                                <i class="klbth-icon-search"></i>
                                <span>Search</span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="https://klbtheme.com/bacola/wishlist/" class="wishlist">
                                <i class="klbth-icon-heart-1"></i>
                                <span>Wishlist</span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="https://klbtheme.com/bacola/my-account/" class="user">
                                <i class="klbth-icon-user"></i>
                                <span>Account</span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="#" class="categories">
                                <i class="klbth-icon-menu-thin"></i>
                                <span>Categories</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
            {/* <!-- header-mobile-nav --> */}

        </header>
    )
}

export default Header ;