import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import { products } from "./product";

import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete an item from cart
  const removeItems = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // add the item
  const addItems = (id) => {
    return dispatch({ type: "INCREMENT", payload: id });
  };

  // subtract the item
  const minusItems = (id) => {
    return dispatch({ type: "DECREMENT", payload: id });
  };

  // to update item
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  // total amount
  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItems, clearCart, addItems, minusItems }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};
export default Cart;
