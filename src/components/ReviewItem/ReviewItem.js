import React from 'react';

const ReviewItem = (props) => {
    const { name, price, shipping, quantity } = props.product;
    return (
        <div>
            <h2>This is form ReviewItem : {name}</h2>
        </div>
    );
};

export default ReviewItem;