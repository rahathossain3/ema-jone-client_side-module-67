import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const Orders = () => {
    // ger products -------------
    const [products, setProducts] = useProducts();

    //get from local storage 
    const [cart, setCart] = useCart(products);
    // -----------------------------

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map()
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Orders;