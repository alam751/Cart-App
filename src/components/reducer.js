export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((currElem) => {
        return currElem.id !== action.payload;
      }),
    };
  } else if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  } else if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((currElem) => {
      if (currElem.id === action.payload) {
        return { ...currElem, quantity: currElem.quantity + 1 };
      }
      return currElem;
    });
    return { ...state, item: updatedCart };
  } else if (action.type === "DECREMENT") {
    let updatedCart = state.item
      .map((currElem) => {
        if (currElem.id === action.payload) {
          return { ...currElem, quantity: currElem.quantity - 1 };
        }
        return currElem;
      })
      .filter((currElem) => {
        return currElem.quantity !== 0;
      });
    return { ...state, item: updatedCart };
  } else if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, currVal) => {
        let { quantity, price } = currVal;
        let totalUpdatedAmount = price * quantity;
        accum.totalAmount += totalUpdatedAmount;
        accum.totalItem += quantity;
        return accum;
      },
      { totalItem: 0, totalAmount: 0 }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
