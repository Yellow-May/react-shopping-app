export const PULL = {
	fetching: "FETCHING",
	datasuccess: "DATA_SUCCESS",
	itemsuccess: "ITEM_SUCCESS",
	failed: "FAILED",
};

export const CART = {
	add: "ADD_ITEM",
	remove: "REMOVE_ITEM",
	update: "UPDATE_ITEM",
	empty: "EMPTY",
};

const reducer = (state, action) => {
	switch (action.type) {
		case PULL.fetching:
			return {
				...state,
				status: "loading",
				shopdata: null,
				shopitem: null,
				errormsg: "",
			};
		case PULL.datasuccess:
			return { ...state, status: "idle", shopdata: action.payload };
		case PULL.itemsuccess:
			return { ...state, status: "idle", shopitem: action.payload };
		case PULL.failed:
			return {
				...state,
				status: "idle",
				errormsg: "Error!!, Check your connection and try again",
			};

		case CART.add:
			return {
				...state,
				cartdata: state.cartdata
					? state.cartdata.filter(item => item.id === action.payload.id).length === 0
						? [...state.cartdata, action.payload]
						: [...state.cartdata]
					: [action.payload],
			};
		case CART.remove:
			return {
				...state,
				cartdata:
					state.cartdata.length === 1
						? null
						: state.cartdata.filter(item => item.id !== action.payload),
			};
		case CART.update:
			return {
				...state,
				cartdata: state.cartdata.map(item => {
					if (item.id === action.payload.id) item.quantity = action.payload.quantity;
					return item;
				}),
			};
		case CART.empty:
			return { ...state, cartdata: null };
		default:
			return state;
	}
};

export default reducer;
