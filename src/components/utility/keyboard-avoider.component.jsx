import { Platform } from "react-native";
import styled from "styled-components/native";

export const KeyboardAvoider = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
  keyboardVerticalOffset: 16,
  enabled: true,
})`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
