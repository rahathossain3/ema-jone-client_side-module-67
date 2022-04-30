import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    // load data or state declare
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([]);

    // another state declare 
    const [cart, setCart] = useCart()

    //for pagination
    const [pageCount, setPageCount] = useState(0);

    // page 
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // products state for pagination 

    useEffect(() => {
        // fetch('products.json')
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [page, size])


    // pagination
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])


    //event handler  add ------ (using other summary)
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        // console.log(selectedProduct)
        const exists = cart.find(product => product._id === selectedProduct._id);

        if (!exists) {
            //যদি প্রডাক্ট না থাকে
            selectedProduct.quantity = 1;
            //do not do this : cart.push(selectedProduct)
            //array copy 
            newCart = [...cart, selectedProduct];
        }
        else {
            //যদি প্রডাক্ট  থাকে
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id)
    }



    /* 
    
        useEffect(() => {
            console.log('local storage first line', products);
            const storedCart = getStoredCart();
            const saveCart = [];
            // console.log(storedCart);
            // get single element in the object ---
            for (const id in storedCart) {
                // find a single product in object using id
                const addedProduct = products.find(product => product._id === id);
                if (addedProduct) {
                    // set products quantity
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    saveCart.push(addedProduct);
    
                    // console.log(addedProduct);
                }
            }
            // set setCart new value on localStorage data
            setCart(saveCart)
            // console.log('local storage data finished')
        }, [products])
        //products er man er upor nirbor korbe. products er man joto bar change hobe toto bar function ke call kora hobe.
    
         */


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        // send even handler by a parameter-------------
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

                {/* pagination ------------ */}
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            {/* orders summary------- */}
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;