export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];

    case "Remove": {
      const updatedCart = state.filter((product) => product.id !== action.payload);
      return updatedCart;
    }

    default:
      return state;
  }
};
