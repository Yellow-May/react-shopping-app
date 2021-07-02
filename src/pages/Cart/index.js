import React from "react";
import AppContext from "../../app/store";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";

import StyledButton from "../../styles/components/button";
import QuantSelect from "./components/QuantSelect";
import BoughtItems from "./components/BoughtItems";
import Styled from "./styled";

const CartPage = () => {
	const { state, actions } = React.useContext(AppContext);
	const { cartdata } = state;
	const { removefromcart, updatecart, emptycart } = actions;

	const { push } = useHistory();

	return (
		<Styled.Wrapper>
			{cartdata ? (
				cartdata.map(item => (
					<Styled.ItemWrapper key={item.id}>
						<Styled.ContentWrapper>
							<Styled.ContentHeading>{item.title}</Styled.ContentHeading>
							<Styled.ContentPrice>{item.price * item.quantity}</Styled.ContentPrice>
							<QuantSelect id={item.id} value={item.quantity} changeFunc={updatecart} />
						</Styled.ContentWrapper>
						<StyledButton
							variant='icon'
							title='remove from cart'
							onClick={() => {
								removefromcart(item.id);
								toast.warn(`${item.title} removed from cart`);
							}}>
							<FaTimes color='red' />
						</StyledButton>
					</Styled.ItemWrapper>
				))
			) : (
				<Styled.EmptyText>Cart is Empty!</Styled.EmptyText>
			)}
			{cartdata && (
				<StyledButton
					variant='solid'
					title='Buy'
					onClick={() => {
						push("/");
						toast.info(<BoughtItems cartdata={cartdata} />);
						emptycart();
					}}>
					Buy Items
				</StyledButton>
			)}
		</Styled.Wrapper>
	);
};

export default CartPage;
