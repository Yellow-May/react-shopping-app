import styled from "styled-components";

const Styled = {
	Wrapper: styled.header({
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottom: "thin solid",
		padding: "10px 1vw",

		"@media (min-width: 480px)": { padding: "10px 2vw" },
		"@media (min-width: 640px)": { padding: "10px 5vw" },
		"@media (min-width: 768px)": { padding: "10px 8vw" },
		"@media (min-width: 960px)": { padding: "10px 11vw" },
		"@media (min-width: 1024px)": { padding: "10px 15vw" },
	}),

	Heading: styled.h1({
		fontSize: "1.5em",
		letterSpacing: 1,
	}),
};

export default Styled;
