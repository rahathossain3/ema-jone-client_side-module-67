import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    //destructuring object-------------- get by props
    //function 
    const { product, handleAddToCart } = props;

    //object destructuring -------------
    const { name, img, seller, price, ratings } = product;




    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;