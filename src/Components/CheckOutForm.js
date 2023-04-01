import React, { useState } from "react";
import "../style/CheckoutForm.css";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { VscLock } from "react-icons/vsc";
import { BsCreditCard2Back } from "react-icons/bs";

import { getBasketTotal } from "../reducer";

import { useDataLayervalue } from "../DataLayer";
import axios from "axios";
import { toast } from "react-toastify";
import { get_Date_Month } from "../API/GetDate";
import { createOrders } from "../API/OrderApi";
import { restCart } from "../API/RestCart";
import { CircularProgress } from "@material-ui/core";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#5A5A5A",
        letterSpacing: "1px",
        fontSize: "14px"
      },
      ":focus": {
        outline: '1px solid #E9627D'
      },
    },
  },
  invalid: {
    fontFamily: "Arial, sans-serif",
    color: "#fa755a",
    iconColor: "#fa755a",
  },
};

function CheckOutForm({
  items,
  setPaymentComplete,
  addedItems,
  setAddedItems,
}) {
  const [{ token }] = useDataLayervalue();

  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const create_order = () => {
    try {
      var order = [];
      items.map((item) => {
        var product = {
          date: get_Date_Month(),
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        };
        order.push(product);
      });

      if (order) {
        createOrders(localStorage.getItem("AccessToken"), order);
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentMethodObj = {
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name,
        email,
      },
    };

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      paymentMethodObj
    );

    if (!error) {
      try {
        const data = {
          id: paymentMethod.id,
          name: paymentMethod.billing_details.name,
          email: paymentMethod.billing_details.email,

          amount: getBasketTotal(items),
        };

        if (data) {
          setLoading(true);
        }

        const response = await axios.post(
          `https://shopezy-api.onrender.com/auth/user/stripe/payment`,
          {
            headers: { "Content-Type": "application/json" },
            data,
          }
        );

        if (response.data.success) {
          create_order();
          restCart(localStorage.getItem("AccessToken"));
          setPaymentComplete(true);
          setAddedItems(addedItems.splice(0, addedItems.length));
          setLoading(false);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      setErrorMsg(error);
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="form_container">
      <div className="head-section">
        <i>
          <VscLock />
        </i>
        <h3 className="form_head">Payment</h3>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="user_info">
          <label htmlFor="name">CARDHOLDER'S NAME</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name on card"
          />
        </div>

        <div className="user_info">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="row_card_number">
          <div className="card_num">
            <label htmlFor="card-number">CARD NUMBER</label>

            <div className="card-input">
              <CardNumberElement
                className="card_num_input"
                id="card-number"
                options={CARD_ELEMENT_OPTIONS}
              />
              <i>
                <BsCreditCard2Back />
              </i>
            </div>
          </div>
        </div>

        <div className="row_info_exp">
          <div className="card_exp">
            <label htmlFor="card-expiration">EXPIRATION DATE</label>

            <CardExpiryElement
              id="card-expiration"
              className="card_exp_input"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>

          <div className="card-cvc">
            <label htmlFor="cvc">CVC</label>

            <CardCvcElement
              id="cvc"
              className="card_cvc_input"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <div className="pay">
          <button className="payBtn" type="submit">
            {!loading ? (
              <span>Pay &#8377; {numberWithCommas(getBasketTotal(items))}</span>
            ) : (
              <span>
                <CircularProgress color="inherit" size="16px" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOutForm;
