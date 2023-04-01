import React from "react";
import "../style/sliderItems.css";
import { NavLink } from "react-router-dom";

function SliderItems({ id, title, image, rating, price, description, folder, background}) {
  return (
    <div className="card">

      <img className={background} src={image} alt="product image" />

      <h4 className="card-title">{title}</h4>

      <div className="card-btn">

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
          className="slider-item-add-btn"
        >
          View Product
        </NavLink>

      </div>
    </div>
  );
}

export default SliderItems;
