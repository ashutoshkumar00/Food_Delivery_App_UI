import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const Reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const itemAtExistingItemIndex = state.items[existingItemIndex];

    if (itemAtExistingItemIndex) {
      const updatedItem = {
        ...itemAtExistingItemIndex,
        amount: itemAtExistingItemIndex.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const itemAtExistingItemIndex = state.items[existingItemIndex];

    if (itemAtExistingItemIndex.amount > 1) {
      const updatedItem = {
        ...itemAtExistingItemIndex,
        amount: itemAtExistingItemIndex.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(Reducer, defaultState);

  const handelAddItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const handleRemoveItem = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handelAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
