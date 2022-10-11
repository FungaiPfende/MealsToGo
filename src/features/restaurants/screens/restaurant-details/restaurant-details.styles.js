import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { colours } from "../../../../infrastructure/theme/colours";

export const OrderButton = styled(Button).attrs({
  color: colours.brand.primary,
})`
  padding: ${({ theme }) => theme.space.md};
  width: 90%;
  align-self: center;
`;
