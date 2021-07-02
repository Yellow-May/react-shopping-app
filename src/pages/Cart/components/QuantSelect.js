import React from "react";
import styled from "styled-components";

const Styled = {
	Wrapper: styled.div({
		width: 75,
		height: 20,
		borderRadius: 20,
		display: "flex",
		overflow: "hidden",
	}),

	Button: styled.button({
		outline: "none",
		background: "none",
		padding: "0 5px",
		border: "none",
		color: "rgba(255,255,255,1)",

		":first-child": { backgroundColor: "rgba(217,0,0,1)" },
		":last-child": { backgroundColor: "rgba(0,0,217,1)" },
	}),

	Input: styled.input({
		textAlign: "center",
		minWidth: "50%",
		height: "100%",
		flexGrow: 1,
		outine: "none",
		border: "none",
		fontSize: "0.95em",
	}),
};

const QuantSelect = ({ id, value, changeFunc }) => {
	return (
		<Styled.Wrapper>
			<Styled.Button
				title='Decrement'
				onClick={() => value > 1 && changeFunc({ id, quantity: value - 1 })}>
				-
			</Styled.Button>
			<Styled.Input
				type='number'
				aria-label='Quantity'
				value={value}
				onChange={e =>
					e.target.value !== "" &&
					e.target.value.length !== 3 &&
					changeFunc({ id, quantity: e.target.value })
				}
			/>
			<Styled.Button
				title='Increment'
				onClick={() => value < 100 && changeFunc({ id, quantity: value + 1 })}>
				+
			</Styled.Button>
		</Styled.Wrapper>
	);
};

export default QuantSelect;
