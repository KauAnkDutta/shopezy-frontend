import React from "react";
import { getBasketTotal } from "../reducer";
import "../style/ItemList.css";

function ItemList({ items }) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="items_Main_Container">
      <div className="items-sub-countainer">
        <h4 className="list-Item_heading">ORDER</h4>

        <div className="single_item_container">
          {items.map((item, key) => {
            return (
              <div className="single_items" key={key}>
                <div className="item_Info_Container">
                  <img src={item?.image} alt="image"  className="item-image"/>

                  <span>Quantity: {item?.quantity}</span>
                </div>

                <p className="item_list_Price">
                  <span>&#8377;{numberWithCommas(item?.price)}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="list_items_subtotal">
            <span>TOTAL</span>
            <span>&#8377;{numberWithCommas(getBasketTotal(items))}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
