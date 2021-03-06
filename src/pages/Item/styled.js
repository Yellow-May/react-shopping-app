import styled from "styled-components";

const Styled = {
	Wrapper: styled.main({
		width: "100%",
		padding: "20px 2.5vw",

		">button": { margin: "auto" },

		"@media (min-width: 640px)": { padding: "25px 5vw" },
		"@media (min-width: 768px)": { padding: "25px 8vw" },
		"@media (min-width: 960px)": { padding: "30px 11vw" },
		"@media (min-width: 1024px)": { padding: "30px 15vw" },
	}),

	ItemContainer: styled.div({ ">*": { marginBottom: 20, "&:last-child": { marginBottom: 0 } } }),

	ItemImgWrapper: styled.div({
		width: "100%",
		height: 250,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderBottom: "thin solid grey",

		img: {
			maxWidth: "100%",
			maxHeight: "100%",
		},

		"@media (min-width: 640px)": { height: 300 },
		"@media (min-width: 768px)": { height: 350 },
		"@media (min-width: 960px)": { height: 400 },
	}),

	ItemHeading: styled.h2({
		fontSize: "1.25em",
		letterSpacing: 1,
		lineHeight: 1,
		textTransform: "uppercase",
	}),

	ItemDescription: styled.p({
		fontSize: "0.875em",
		letterSpacing: 1,
		lineHeight: 1.5,
	}),

	ItemPrice: styled.h4({ fontSize: "1.5em", "&::before": { content: "'$ '" } }),
};

export default Styled;
