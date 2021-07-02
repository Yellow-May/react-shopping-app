import React from "react";
import reducer, { CART, PULL } from "./reducer";

const initialstate = {
	status: "idle",
	errormsg: "",
	shopdata: null,
	shopitem: null,
	cartdata: null,
};

const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialstate);

	const actions = {
		pullrequest: async (type = "data", slug) => {
			dispatch({ type: PULL.fetching });
			try {
				const res = await fetch(
					type === "item"
						? `https://fakestoreapi.com/products/${slug}`
						: "https://fakestoreapi.com/products"
				);
				const data = await res.json();
				setTimeout(() => {
					dispatch({
						type: type === "item" ? PULL.itemsuccess : PULL.datasuccess,
						payload: data,
					});
				}, 3000);
			} catch (error) {
				setTimeout(() => {
					dispatch({ type: PULL.failed });
				}, 3000);
			}
		},

		addtocart: payload => dispatch({ type: CART.add, payload }),
		removefromcart: payload => dispatch({ type: CART.remove, payload }),
		updatecart: payload => dispatch({ type: CART.update, payload }),
		emptycart: () => dispatch({ type: CART.empty }),
	};

	return <AppContext.Provider value={{ state, actions }}>{children}</AppContext.Provider>;
};

export default AppContext;
