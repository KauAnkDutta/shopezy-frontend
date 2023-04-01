import "../style/ProductPage.css";
import { useLocation } from "react-router-dom";
import { useDataLayervalue } from "../DataLayer";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { HiStar } from "react-icons/hi";

export default function ProductPage({ setAddedItems, addedItems }) {
  const [{ token }] = useDataLayervalue();
  const [quantity, setQuantity] = useState(1);
  let product_info = useLocation().state;
  const [img, setImg] = useState();

  const PF = `https://shopezy-api.onrender.com/images/${product_info?.folder}/`;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const updateMyCart = async () => {
    try {
      await axios
        .post(
          `https://shopezy-api.onrender.com/auth/updateCart`,
          {
            products: {
              id: product_info.id,
              title: product_info.title,
              image: product_info.image,
              rating: product_info.rating,
              price: product_info.price,
              quantity: quantity,
            },
          },
          {
            headers: { Authorization: localStorage.getItem("AccessToken") },
          }
        )
        .then((res) => {
          toast.success(`${product_info.title} added to cart.`);
          if (res.status === 200) {
            setAddedItems([
              ...addedItems,
              {
                id: product_info.id,
                title: product_info.title,
                image: product_info.image,
                rating: product_info.rating,
                price: product_info.price,
                quantity: quantity,
              },
            ]);
          }
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  function mouseHoverHandler(ele) {
    const img_ele = document.querySelector(".pro_image");
    setImg(ele.src);
    img_ele.src = ele.src;
  }

  const style = {
    background: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    objectFit: 'contained',
  };

  return (
    <div className="product_page_container">
      <div className="product_page_subcontainer">
        <div className="product_images">
          <div className="thumbnail_box">
            <img
              src={PF + "img1.jpg"}
              alt="product"
              className="thumbnail"
              onMouseOver={(e) => mouseHoverHandler(e.target)}
            />
          </div>

          <div className="thumbnail_box">
            <img
              src={PF + "img2.jpg"}
              alt="product"
              className="thumbnail"
              onMouseOver={(e) => mouseHoverHandler(e.target)}
            />
          </div>

          <div className="thumbnail_box">
            <img
              src={PF + "img3.jpg"}
              alt="product"
              className="thumbnail"
              onMouseOver={(e) => mouseHoverHandler(e.target)}
            />
          </div>

          <div className="thumbnail_box">
            <img
              src={PF + "img4.jpg"}
              alt="product"
              className="thumbnail"
              onMouseOver={(e) => mouseHoverHandler(e.target)}
            />
          </div>
        </div>

        <div className="right_side">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "productimage",
                isFluidWidth: true,
                src: img ? img : product_info.image,
              },
              largeImage: {
                src: img ? img : product_info.image,
                width: 1000,
                height: 1000,
              },
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%",
              },
              style,
            }}
            className="pro_image"
          />
        </div>

        <div className="middle">
          <p className="pro_title">{product_info.title}</p>

          <div className="pro_rating">
            <span>{product_info.rating}</span>
            <i>
              <HiStar />
            </i>
          </div>

          <p className="pro_Price">
            <small>&#8377;</small>
            <strong>{product_info.price}</strong>
          </p>

          <p className="pro_description">{product_info.description}</p>
        </div>

        <div className="left_side">
          <p className="proPrice">
            Price:{" "}
            <span className="pro_price">&#8377;{numberWithCommas(product_info?.price)}</span>
          </p>
          <p className="pro_status">
            Status: <span className="status">In Stock</span>
          </p>

          <div className="quantity">
            <label className="quantity_label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              placeholder="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity_input"
            />
          </div>

          <button className="add_to_cart_btn" onClick={updateMyCart}>
            Add To Cart
          </button>

          <button className="buy_now_btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
