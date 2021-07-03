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

		"@media (min-width: 480px)": { fontSize: 14 },
		"@media (min-width: 640px)": { fontSize: 15 },
		"@media (min-width: 768px)": { fontSize: 16 },
		"@media (min-width: 960px)": { fontSize: 17 },
	},
});
