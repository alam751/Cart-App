import React, { useContext } from "react";
import Items from "./Item";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItem, totalAmount, clearCart } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem}</span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((currItem) => {
              return <Items key={currItem.id} {...currItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart total : <span>{totalAmount}rs</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
