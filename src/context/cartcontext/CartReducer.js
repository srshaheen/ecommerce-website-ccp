export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      // add
      const isProduct = state.find((product) => product.id === action.payload.id);

      if (isProduct) {
        const updatedCart = state.map((product) =>
          product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
        );

        return updatedCart;
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    // remove

    case "Remove": {
      const updatedCart = state.filter((product) => product.id !== action.payload);
      return updatedCart;
    }

    // incremenet
    case "Increment": {
      const updatedCart = state.map((product) =>
        product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
      );

      return updatedCart;
    }

    case "Decrement": {
      const updatedCart = state.map((product) =>
        product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product
      );

      return updatedCart;
    }

    default:
      return state;
  }
};
