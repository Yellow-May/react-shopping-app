import styled from "styled-components";

const Styled = {
	Wrapper: styled.main({
		width: "100%",
		padding: "20px 2.5vh",

		">button": { margin: "auto" },
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
