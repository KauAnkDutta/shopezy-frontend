import React from "react";
import CurrencyFormat from "react-currency-format";
import '../style/Subtotal.css';
import { getBasketTotal } from "../reducer";
import {NavLink} from 'react-router-dom';

function Subtotal({items}){
    // to calculate the total quantity of the cart
    const getTotalQuan = () => {
        let totalQuan = 0;
        items.map((items) => {
           return totalQuan += items.quantity;
        })
        return totalQuan
    }

    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({getTotalQuan()} items): <strong>&#8377;{value}</strong>
                        </p>

                        <small className="subtotalGift">
                            <input type="checkbox" />This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(items)}
                displayType={"text"}
                thousandSeparator={true}
            />

            <NavLink to={`/stripeCheckoutForm`} className="subtotalBtn">Proceed to Checkout</NavLink>
        </div>
    )
}

export default Subtotal;