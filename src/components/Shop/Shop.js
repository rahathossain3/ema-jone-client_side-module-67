import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    // load data or state declare
    const [products, setProducts] = useState([]);

    // another state declare 
    const [cart, setCart] = useState([])

    //for json data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    //event handler  add ------ (using other summary)
    const handleAddToCart = (product) => {
        console.log(product)
        //do not do this : cart.push(product)
        //array copy 
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        // send even handler by a parameter-------------
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h4>order summary</h4>
                {/* using event handler ---------------------- */}
                <p>selected itmes : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;