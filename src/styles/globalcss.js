import { createGlobalStyle } from "styled-components";

export default createGlobalStyle({
	"*, *::before, *::after": {
		boxSizing: "border-box",
		margin: 0,
		padding: 0,
		color: "inherit",
		textDecoration: "none",
	},

	body: {
		fontSize: 13,
	},
});
