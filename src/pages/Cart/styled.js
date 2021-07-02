import styled from "styled-components";

const Styled = {
	Wrapper: styled.main({
		width: "100%",
		padding: "20px 2.5vh",

		">button": {
			marginLeft: "auto",
		},
	}),

	EmptyText: styled.h5({
		fontSize: "1.25em",
		textAlign: "center",
	}),

	ItemWrapper: styled.div({
		margin: "30px 0",
		padding: 10,
		borderRadius: 5,
		display: "flex",
		boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)",

		">button": { boxShadow: "none" },
	}),

	ContentWrapper: styled.div({
		flexGrow: 1,
		paddingRight: 8,
	}),

	ContentHeading: styled.h3({
		fontSize: "1.25em",
		lineHeight: 1.5,
		marginBottom: 15,
	}),

	ContentPrice: styled.h4({
		fontSize: "1em",
		letterSpacing: 1,
		marginBottom: 15,

		"&::before": { content: "'$ '" },
	}),
};

export default Styled;
