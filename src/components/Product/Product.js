import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    //destructuring object 
    const { name, img, seller, price, ratings } = props.product;

    /*   //function 
      const { handleAddToCart } = props; */


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