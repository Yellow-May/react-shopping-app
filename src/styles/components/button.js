import styled from "styled-components";

export default styled.button(({ variant, color }) => ({
	outline: "none",
	border: "none",
	cursor: "pointer",
	transition: "0.25s",
	display: "flex",
	alignItems: "center",
	gap: 10,
	width: "max-content",
	fontSize: "1em",
	boxShadow: "1px 1px 1.5px rgba(55,55,55,1)",

	borderRadius: variant === "icon" ? 8 : 6,
	color:
		color === "primary"
			? "rgba(0,0,255,1)"
			: variant === "solid"
			? "rgba(255,255,255,1)"
			: "rgba(0,0,0,1)",
	background: variant === "solid" ? "rgba(0,0,255,1)" : "none",
	padding: variant === "icon" ? 8 : "7px 15px",
}));
