import React from "react";
import "../style/ReturnOrder.css";
import { useDataLayervalue } from "../DataLayer";
import buy from "../images/buy.png";

function ReturnOrder() {
  const [{ user, orders }] = useDataLayervalue();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      {orders.map((order, key) => {
        return (
          <div className="return_main_container" key={key}>
            <div className="return_first_container">
              <div className="return_sub_container">
                <div className="return_header_option">
                  <span className="line_one">ORDER PLACED</span>

                  <span className="line_two">{order?.date}</span>
                </div>

                <div className="return_header_option">
                  <span className="line_one">TOTAL</span>

                  <span className="line_two">
                    &#8377; {order?.price * order?.quantity}
                  </span>
                </div>

                <div className="return_header_option">
                  <span className="line_one">SHIP TO</span>

                  <span className="line_two name">{user?.name}</span>
                </div>
              </div>

              <div className="header_option_right">
                <span className="line_one">ORDER # {user?._id} </span>
              </div>
            </div>

            <div className="return_second_container">
              <div className="return-img_container">
                <img src={order?.image} alt={order?.title} />
              </div>

              <div className="return-item_info">
                <p>{order?.title}</p>
                <span>Quantity: {order?.quantity}</span>
                <span>Price: &#8377;{numberWithCommas(order?.price)}</span>

                <div className="buy_back">
                  <img src={buy} alt="Buy It Back" />
                  <button className="buy_again">Buy it again</button>
                </div>
              </div>

              <div className="return-btn_box">
                <button className="demo_btn">Leave Seller Feedback</button>
                <button className="demo_btn">Leave Delivery Feedback</button>
                <button className="demo_btn">Product Review</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ReturnOrder;
