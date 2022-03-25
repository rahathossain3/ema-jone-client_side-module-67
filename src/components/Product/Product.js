import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


//option 2
// const Product = ({ product, handleAddToCart }) => {

//option 1
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

            {/*-------------without destructuring use----------------- */}
            {/* <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> */}


            {/*-------------when destructuring use----------------- */}
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>

                {/* add fontawesome icon -------------------- */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;