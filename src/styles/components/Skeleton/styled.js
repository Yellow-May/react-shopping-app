import styled, { css, keyframes } from "styled-components";

const glit = keyframes({
	"0%": { left: "-100%" },
	"50%": { left: "0%" },
	"100%": { left: "-100%" },
});

const Styled = {
	Wrapper: styled.div`
		padding: 8px;
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: -100%;
			width: 200%;
			height: 100%;
			background: linear-gradient(25deg, rgba(255,255,255,0.1), 
         transparent, rgba(255,255,255,0.25), 
         transparent, rgba(255,255,255,0.1));
			animation: ${css`
				${glit} 2s linear infinite
			`};
		};

		*; {
			&:first-child, &:last-child { margin: 0px };
		},
	`,

	Skeleton: styled.span(({ variant, size }) => ({
		width: variant === "h" ? "50%" : variant === "b" ? "25%" : "100%",
		height: size === "bg" ? 200 : variant === "img" ? 80 : variant === "p" ? 5 : 10,
		borderRadius: variant === "img" ? 7 : variant === "b" ? 5 : 10,
		backgroundColor: "grey",
		display: "block",
		margin: "10px 0",
	})),
};

export default Styled;
