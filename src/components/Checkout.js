import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/LPA/Donation/Header-Banner_PC._CB442570392_.jpg" alt="" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
