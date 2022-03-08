import React from "react";
import styled from "styled-components/native";
import { space } from "../../infrastructure/theme/spacing";

const sizeVariant = {
  small: space.sm,
  medium: space.md,
  large: space.lg,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const getVariant = (position, size) =>
  `${positionVariant[position]}: ${sizeVariant[size]}`;

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

// Set up the default props for the `Spacer` component
// using the .defaultProps property.
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
