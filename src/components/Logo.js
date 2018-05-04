// @flow
import React from 'react';
import styled from 'styled-components';
import ZeitLogo from '../../assets/zeit-logo.png';

type Props = {
	size: string,
	style: any,
}

function setLogoSize(size: string) {
	if (size === 'large') {
		return { h: '57px', w: '64px' };
	}
	return { h: '30px', w: '34px' };
}

const Image = styled.Image`
	height: ${({ size }) => setLogoSize(size).h};
	width: ${({ size }) => setLogoSize(size).w};
`;

export default ({ size, style }: Props) => (
	<Image source={ZeitLogo} size={size} style={style} />
);

