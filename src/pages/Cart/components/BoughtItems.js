import React from "react";
import styled from "styled-components";

const Styled = {
	Heading: styled.h3({
		marginBottom: 20,
		fontSize: "1.25em",
	}),

	ListWrapper: styled.ol({
		paddingLeft: 10,
	}),

	ListItem: styled.li({
		marginBottom: 10,
		fontSize: "0.875em",
	}),

	Total: styled.h3({
		span: { fontSize: "1.25em", "&:after": { content: "': '" } },
	}),
};

const BoughtItems = ({ cartdata }) => {
	return (
		<>
			<Styled.Heading>Thank you for shopping with us!</Styled.Heading>
			<Styled.ListWrapper>
				{cartdata.map(item => (
					<Styled.ListItem>{`${item.title}- $${item.price * item.quantity}`}</Styled.ListItem>
				))}
			</Styled.ListWrapper>
			<Styled.Total>
				<span>Total</span>${cartdata.reduce((a, b) => a + b.price * b.quantity, 0)}
			</Styled.Total>
		</>
	);
};

export default BoughtItems;
