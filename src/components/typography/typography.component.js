import PropTypes from 'prop-types';
import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
	body,
	label,
	caption,
	error,
	hint,
};

const TextVariant = styled.Text`
	${({ defaultStyle }) => defaultStyle}
	${({ variant, theme }) => variants[variant](theme)}
`;

TextVariant.defaultProps = {
	variant: 'body',
};

export const Text = ({ variant, children, ...otherProps }) => {
	const theme = useTheme();
	const defaultStyle = defaultTextStyles(theme);
	return (
		<TextVariant
			defaultStyle={defaultStyle}
			variant={variant}
			{...otherProps}
		>
			{children}
		</TextVariant>
	);
};

Text.propTypes = {
	variant: PropTypes.oneOf(['body', 'label', 'caption', 'error', 'hint']),
	children: PropTypes.node,
};
