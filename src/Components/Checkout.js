import React from "react";
import ad from '../images/ad.jpg'
import '../style/Checkout.css'
import CheckoutProduct from "./CheckoutProduct";


import Subtotal from "./Subtotal";

function Checkout({items, setItems}){

    return(
        <div className="checkout">
            <div className="checkoutLeft">
                <img src={ad} alt='Adds' className='checkoutAdd'/>

                <div>
                    <h2 className='checkoutTitle'>Your Basket</h2>
                    <hr />

                    {items.map((item, key) => (
                        <CheckoutProduct
                            id={item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            quantity = {item.quantity}
                            key = {key}
                            items = {items}
                            setItems = {setItems}
                        />
                    ))}
                </div>
            </div>

            <div className="checkoutRight">
                < Subtotal items={items}/>
            </div>
        </div>
    )
}

export default Checkout;