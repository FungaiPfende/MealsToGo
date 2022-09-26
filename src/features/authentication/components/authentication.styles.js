import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { colours } from "../../../infrastructure/theme/colours";

export const AuthBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.space.xl};
  margin-top: ${({ theme }) => theme.space.md};
`;

export const AuthButton = styled(Button).attrs({
  color: colours.brand.primary,
})`
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.sizes.sm};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  margin-top: ${({ theme }) => theme.space.lg};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.space.md};
  margin: ${({ theme }) => theme.space.md};
`;

export const AnimationWrapper = styled.View`
  width: 70%;
  height: 40%;
  position: absolute;
  top: 0px;
  padding: ${({ theme }) => theme.space.md};
`;
