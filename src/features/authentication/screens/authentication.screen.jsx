import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthCover,
} from "../components/authentication.styles";

export const AuthScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <AuthCover />
      <AuthContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>

        <Spacer size="large" />

        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </AuthButton>
      </AuthContainer>
    </AuthBackground>
  );
};
