export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [
          ...new Map(
            [...state.cartData, action.payload].map((item) => [
              item.itemId,
              item,
            ])
          ).values(),
        ],
      };

    case "CART_QUANT_INC":
      return {
        ...state,
        cartData: state.cartData.map((data) => {
          if (data.itemId === action.payload) {
            data.cartQuant = action.newData;
          }
          return data;
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (data) => data.itemId !== action.payload
        ),
      };

    case "EMPTY_CART":
      return {
        ...state,
        cartData: [],
      };

    case "ADD_TO_PURCHASE":
      return {
        ...state,
        purchaseData: [...action.payload],
      };

    case "CLEAR_PURCHASE":
      return {
        ...state,
        purchaseData: [],
      };

    default:
      return state;
  }
};
