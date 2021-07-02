import styled from "styled-components";

const Styled = {
	Wrapper: styled.header({
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 1vh",
		borderBottom: "thin solid",
	}),

	Heading: styled.h1({
		fontSize: "1.5em",
	}),
};

export default Styled;
