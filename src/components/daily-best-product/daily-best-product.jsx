import React from "react";
import './daily-best-product.css';
import { Link } from "react-router-dom";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Rating from '@mui/material/Rating';

const DailyBestProducts = () => {
    const limitCharacters = (text, limit) => {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
      };

    const products = [
       
        {
            id: 1,
            label: 'Hot',
            image: './src\\assets\\images\\features-images\\v14-thin-and-light-laptop-lenovo.webp', // Add actual image URL
            category: 'Laptop',
            title: 'Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home)',
            rating: 4.5,
            seller: 'Lenovo V14 Intel',
            offer: 20,
            price: 74999.00,
            oldPrice: 124900.00,
        },
        // {
        //     id: 3,
        //     label: 'Sale',
        //     image: './src\\assets\\images\\features-images\\original-imah4qscsfg5bgm.webp', // Add actual image URL
        //     category: 'Snack',
        //     title: 'Encore Seafoods Stuffed Alaskan Salmon',
        //     rating: 4.0,
        //     seller: 'NestFood',
        //     price: 35.85,
        //     oldPrice: 37.8,
        // },
    ];
    return (
        <div className="productThumb">
            {products.map((product) => (
                <div key={product.id} className="product-card mb-30">
                    <div className={`product-card__label ${product.label.toLowerCase()}`}>
                        {product.label}
                    </div>
                    <div className="product-card__image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-card__info">
                        <p className="product-card__category">{product.category}</p>
                        <h3 className="product-card__title">{limitCharacters (product.title, 60)}</h3>
                        <Link to='/'>
                            <p>by <span className="product-card__seller">{product.seller}</span></p>
                        </Link>
                        <div className="product-card__offer">
                            {product.offer}% off
                        </div>
                        <div className="product-card__rating">
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                        </div>
                        <div className="product-card__pricing">
                            <span className="price">₹{product.price}</span>
                            <span> M.R.P:</span>
                            <span className="old-price">₹{product.oldPrice}</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                            <div className="progress mb-5">
                                <div className="progress-bar" role="progressbar">
                                </div>
                            </div>
                                <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <div className="button-daily-icon">
                            <button classNameName="product-card__add-btn"><ShoppingCartCheckoutOutlinedIcon /> Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DailyBestProducts;