import styled from "styled-components/native";

// Create a default style for the text
const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colours.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

// Create different style variants
const title = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  color: ${theme.colours.text.error}
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
  title,
  body,
  label,
  caption,
  error,
  hint,
};

// <Text variant="something" />
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)};
  ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body",
};
