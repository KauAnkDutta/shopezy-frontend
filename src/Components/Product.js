import React from "react";
import "../style/Product.css";
import { NavLink } from "react-router-dom";
import { HiStar } from "react-icons/hi";

function Product({ id, title, image, rating, price, description, folder, grow }) {
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={grow? "product grow": "product"}>
      <img src={image} alt={image} />

      <div className="productInfo">
        <p className="title">{title}</p>

        <p className="productPrice">
          <span>&#8377;</span>
          <span className="price">{numberWithCommas(price)}</span>
        </p>

        <div className="productRating">
          <span>{rating}</span>
          <i>
            <HiStar />
          </i>
        </div>
      </div>

      <NavLink
        to={"/productpage"}
        state={{
          id: id,
          title: title,
          image: image,
          description: description,
          price: price,
          rating: rating,
          folder: folder,
        }}
        className="addBtbn"
      >
        View Product
      </NavLink>
    </div>
  );
}

export default Product;
