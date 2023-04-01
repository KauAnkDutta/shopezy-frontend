import React,{useState} from "react";
import ItemList from "./ItemList";
import CheckOutForm from "./CheckOutForm";
import Success from "./Success";

import '../style/Stripe.css';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const PUBLICK_KEY = "pk_test_51LPW8YSIBq3duvShV84Opydq2BSjQoTaMrEmRu51Btt5gDw9rUfsEbzUUbEn3DXhrzwFAglouFeWFzRzSC7IjwtV003qyGvjjH"

const stripePromise = loadStripe(PUBLICK_KEY);


function StripePage({items, addedItems, setAddedItems}){
    const[paymentComplete, setPaymentComplete] = useState(false);

   
    return (
        <>
            {
                !paymentComplete ? 
                <div className="stripe_main_container">
                    <div className="stripe_sub_container">
                        <div className="stripe_container_right">
                            <Elements stripe={stripePromise}>
                                <CheckOutForm setPaymentComplete = {setPaymentComplete} items = {items} addedItems={addedItems} setAddedItems = {setAddedItems}/>
                            </Elements>
                        </div>

                        <div className="stripe_container_left">
                            <ItemList items = {items}/>
                        </div>  
                    </div>
                </div>

                :

                <div>
                    < Success />
                </div>
            }
        </>
    )
}

export default StripePage;