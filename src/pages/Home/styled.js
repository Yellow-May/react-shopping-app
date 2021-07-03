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
		height: 125,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",

		img: {
			maxWidth: "100%",
			maxHeight: "100%",
		},

		"@media (min-width: 640px)": { height: 200 },
		"@media (min-width: 768px)": { height: 150 },
		"@media (min-width: 960px)": { height: 175 },
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
		padding: "20px 2.5vw",

		">button": { margin: "auto" },

		"@media (min-width: 640px)": { padding: "25px 5vw" },
		"@media (min-width: 768px)": { padding: "25px 8vw" },
		"@media (min-width: 960px)": { padding: "30px 11vw" },
		"@media (min-width: 1024px)": { padding: "30px 15vw" },
	}),

	Heading: styled.h1({
		textTransform: "uppercase",
		fontSize: "1.125em",
		letterSpacing: 1,
	}),

	Container: styled.div({
		marginTop: 15,
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: 25,

		"@media (min-width: 768px)": { gridTemplateColumns: "repeat(3, 1fr)" },
	}),
};

export default Styled;
