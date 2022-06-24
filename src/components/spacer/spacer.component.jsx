import React from "react";
import styled, { useTheme } from "styled-components/native";
import { space } from "../../infrastructure/theme/spacing";

const sizeVariant = {
  small: space.sm,
  medium: space.md,
  large: space.lg,
  xlarge: space.xl,
  xxlarge: space.xxl,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const getVariant = (position, size) =>
  `${positionVariant[position]}: ${sizeVariant[size]}`;

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

// Set up the default props for the `Spacer` component
// using the .defaultProps property.
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
