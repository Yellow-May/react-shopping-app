import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { CgShoppingCart, CgHomeAlt } from "react-icons/cg";
import StyledButton from "../../styles/components/button";
import Styled from "./styled";

const Header = () => {
	const { pathname } = useLocation();
	const { push } = useHistory();

	return (
		<Styled.Wrapper>
			<Styled.Heading>React Shop App</Styled.Heading>
			<StyledButton
				variant='icon'
				color='primary'
				onClick={() => (pathname !== "/cart" ? push("/cart") : push("/"))}>
				{pathname !== "/cart" ? <CgShoppingCart /> : <CgHomeAlt />}
			</StyledButton>
		</Styled.Wrapper>
	);
};

export default Header;
