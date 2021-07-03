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

		"@media (min-width: 640px)": {
			height: size === "bg" ? 350 : variant === "img" ? 150 : variant === "p" ? 7 : 12,
		},
		"@media (min-width: 768px)": {
			height: size === "bg" ? 400 : variant === "img" ? 120 : variant === "p" ? 8 : 13,
		},
		"@media (min-width: 1024px)": {
			height: size === "bg" ? 450 : variant === "img" ? 160 : variant === "p" ? 9 : 14,
		},
	})),
};

export default Styled;
