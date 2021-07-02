import styled from "styled-components";

const Styled = {
	Wrapper: styled.footer({
		width: "100%",
		borderTop: "thin solid",
		padding: "5px 1vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),

	Text: styled.p({
		fontSize: "0.875em",
	}),
};

export default Styled;
