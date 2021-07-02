import React from "react";
import { useLocation, useHistory } from "react-router";
import { toast } from "react-toastify";
import AppContext from "../../app/store";

import { AiOutlineReload } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";

import StyledButton from "../../styles/components/button";
import { SkeletonWrapper, Skeleton } from "../../styles/components/Skeleton";
import Styled from "./styled";

const ItemPage = () => {
	const { state, actions } = React.useContext(AppContext);
	const { errormsg, status, shopitem } = state;
	const { pullrequest, addtocart } = actions;

	const { pathname } = useLocation();
	const requestCall = () => pullrequest("item", pathname.replace("/products/", ""));

	const { push } = useHistory();

	const addToCart = () => {
		addtocart({ ...shopitem, quantity: 1 });
		push("/");
		toast.success(shopitem.title + " Added to Cart");
	};

	React.useEffect(() => {
		requestCall();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		errormsg && toast.error(errormsg);
	}, [errormsg]);

	return (
		<Styled.Wrapper>
			{status === "loading" ? (
				<SkeletonWrapper>
					<Skeleton variant='img' size='bg' />
					<Skeleton variant='h' />
					<Skeleton variant='h' />
					{new Array(10).fill(1).map((_, i) => (
						<Skeleton key={i} variant='p' />
					))}
					<Skeleton variant='b' />
				</SkeletonWrapper>
			) : errormsg ? (
				<StyledButton variant='icon' onClick={() => requestCall()}>
					<AiOutlineReload />
				</StyledButton>
			) : (
				shopitem && (
					<Styled.ItemContainer>
						<StyledButton variant='icon' color='primary' onClick={() => push("/")}>
							<CgHomeAlt />
						</StyledButton>
						<Styled.ItemImgWrapper>
							<img src={shopitem.image} alt={shopitem.title} />
						</Styled.ItemImgWrapper>
						<Styled.ItemHeading>{shopitem.title}</Styled.ItemHeading>
						<Styled.ItemDescription>{shopitem.description}</Styled.ItemDescription>
						<Styled.ItemPrice>{shopitem.price}</Styled.ItemPrice>
						<StyledButton variant='solid' onClick={addToCart}>
							Add To Cart
						</StyledButton>
					</Styled.ItemContainer>
				)
			)}
		</Styled.Wrapper>
	);
};

export default ItemPage;
