import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // ger products -------------
    const [products, setProducts] = useProducts();

    //get from local storage 
    const [cart, setCart] = useCart(products);
    // -----------------------------


    const handelRemoveProduct = product => {
        // jake pabe take bade sokol ke select korbo 
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}
                    ></ReviewItem>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button>Proceed checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;