import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    totalProductsInStore: [],
    itemInCart: [],
    countOfItemInCart: 0,
    initial: true,
  },
  reducers: {
    addItemIncart: (state, action) => {
      state.countOfItemInCart += 1;
      let flag = 0;
      state.itemInCart.map((item) => {
        if (item.name === action.payload.name) {
          item.count += 1;
          flag = 1;
        }
        return item;
      });

      if (flag === 0)
        state.itemInCart = [
          ...state.itemInCart,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            price: action.payload.price,
            image: action.payload.image,
            count: 1,
          },
        ];
    },
    removeItemFromCart: (state, action) => {
      state.itemInCart.map((item) => {
        if (item.id === action.payload.id) {
          item.count -= 1;
          state.countOfItemInCart -= 1;
        }
        if (item.count !== 0) return item;
      });
    },
    initialProducts: (state, action) => {
      state.totalProductsInStore = action.payload;
    },
    handleOrder: (state) => {
      state.intial = true;
      state.itemInCart = [];
      state.countOfItemInCart = 0;
    },
  },
});

export const {
  addItemIncart,
  initialProducts,
  removeItemFromCart,
  handleOrder,
} = ProductSlice.actions;

export default ProductSlice.reducer;
