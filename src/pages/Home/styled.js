import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = {
	Wrapper: styled(Link)({
		display: "block",
		overflow: "hidden",
		borderRadius: 8,
		boxShadow: "1px 1px 1px grey",
	}),

	ImgWrapper: styled.div({
		width: "100%",
		height: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",

		img: {
			maxWidth: "100%",
			maxHeight: "100%",
		},
	}),

	ContentWrapper: styled.div({
		padding: "10px 5px",
		backgroundColor: "rgba(65, 65, 65, 0.125)",

		"*": { marginBottom: 10 },
	}),

	ContentHeading: styled.h3({
		fontSize: "1em",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}),

	ContentText: styled.p({
		fontSize: "0.875em",
		fontWeight: 600,
		letterSpacing: 1,

		"&:last-child": { marginBottom: 0 },
	}),
};

const Styled = {
	Wrapper: styled.main({
		width: "100%",
		padding: "20px 2.5vh",

		">button": { margin: "auto" },
	}),

	Heading: styled.h1({
		textTransform: "uppercase",
		fontSize: "1.125em",
		letterSpacing: 1,
	}),

	Container: styled.div({
		marginTop: 15,
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: 25,
	}),
};

export default Styled;
