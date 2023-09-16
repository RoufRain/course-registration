/* eslint-disable react/jsx-key */

/* eslint-disable react/prop-types */
// import React from 'react';
import './Cart.css'

const Cart = ({selectedData, remainingCredit, totalCredit, totalPrice}) => {
    let count = 1;
    return (
        <div className='cart-container'>
            <div className='remaining-hour'>Credit Hour Remaining {remainingCredit} hr</div>
            <hr />
            <div>
            <p className='course-name'>Course Name:</p>
            {selectedData.map((data) => (
            
                <ol key={selectedData.id}>{count++}. {data.title}</ol>
            ))}
            </div>
           <hr />
            <div>
                <p className='total'>Total Credit:{totalCredit}</p>
            </div>
            <hr />
            {/* <div>
                <p className='total'>Total Price:{totalPrice}</p>
            </div> */}
        </div>
    );
};

export default Cart;