import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItems, addItems, minusItems } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="abcde" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus minus"
            onClick={() => {
              minusItems(id);
            }}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fas fa-plus add"
            onClick={() => {
              addItems(id);
            }}
          ></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItems(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
