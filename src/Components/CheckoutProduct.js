import React from "react";
import "../style/CheckoutProduct.css";
import { useDataLayervalue } from "../DataLayer";
import { toast } from "react-toastify";
import { HiStar } from "react-icons/hi";
import axios from "axios";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  quantity,
  items,
  setItems,
}) {
  const [{ token }] = useDataLayervalue();

  const removeCartItem = async () => {
    try {
      await axios
        .post(
          `https://shopezy-api.onrender.com/auth/removeItem`,
          {
            products: {
              id: id,
            },
          },
          {
            headers: { Authorization: localStorage.getItem("AccessToken") },
          }
        )
        .then((res) => {
          toast.success(`${title} is removed.`);
          if (res.status === 200) {
            setItems(items.filter((obj) => obj.id !== id));
          }
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutImage" alt={title} />

      <div className="checkoutProductInfo">
        <p className="checkoutTitle">{title}</p>
        <p className="checkoutPrice">
          &#8377;
          <span> {price}</span>
        </p>

        <p className="checkoutQuantity">
          Quantity:
          <span> {quantity}</span>
        </p>

        <div className="checkoutProductRatting">
          <span>{rating}</span>
          <i>
            <HiStar />
          </i>
        </div>

        <button onClick={removeCartItem} className="remove_btn">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
