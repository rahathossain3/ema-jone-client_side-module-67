import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>order summary</h4>
            {/* using event handler ---------------------- */}
            <p>selected itmes : {cart.length}</p>
        </div>
    );
};

export default Cart;