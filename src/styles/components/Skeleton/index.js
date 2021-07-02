import React from "react";
import Styled from "./styled";

export const SkeletonWrapper = props => {
	return <Styled.Wrapper>{props.children}</Styled.Wrapper>;
};

export const Skeleton = props => {
	return <Styled.Skeleton {...props}></Styled.Skeleton>;
};
