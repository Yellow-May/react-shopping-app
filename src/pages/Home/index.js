import React from "react";
import { toast } from "react-toastify";
import AppContext from "../../app/store";

import { AiOutlineReload } from "react-icons/ai";

import StyledButton from "../../styles/components/button";
import { SkeletonWrapper, Skeleton } from "../../styles/components/Skeleton";
import Styled, { Card } from "./styled";

const HomePage = () => {
	const { state, actions } = React.useContext(AppContext);
	const { errormsg, status, shopdata } = state;
	const { pullrequest } = actions;

	React.useEffect(() => {
		pullrequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		errormsg && toast.error(errormsg);
	}, [errormsg]);

	return (
		<Styled.Wrapper>
			{errormsg ? (
				<StyledButton variant='icon' onClick={pullrequest}>
					<AiOutlineReload />
				</StyledButton>
			) : (
				<Styled.Heading>Available Products</Styled.Heading>
			)}
			<Styled.Container>
				{status === "loading"
					? new Array(10).fill(1).map((_, i) => (
							<SkeletonWrapper key={i}>
								<Skeleton variant='img' />
								<Skeleton variant='h' />
								<Skeleton variant='p' />
								<Skeleton variant='p' />
								<Skeleton variant='b' />
							</SkeletonWrapper>
					  ))
					: shopdata?.map(item => (
							<Card.Wrapper to={`/products/${item.id}`} key={item.id}>
								<Card.ImgWrapper>
									<img src={item.image} alt={item.title} />
								</Card.ImgWrapper>
								<Card.ContentWrapper>
									<Card.ContentHeading>{item.title}</Card.ContentHeading>
									<Card.ContentText>${item.price}</Card.ContentText>
									<Card.ContentText>In Stock</Card.ContentText>
								</Card.ContentWrapper>
							</Card.Wrapper>
					  ))}
			</Styled.Container>
		</Styled.Wrapper>
	);
};

export default HomePage;
