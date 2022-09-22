import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthCover,
  Title,
} from "../components/authentication.styles";

export const AuthScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <AuthCover />
      <Title>Meals To Go</Title>
<<<<<<< HEAD

=======
>>>>>>> c9582d0d7fc13f9a4540a68536fdb495c4fe83e7
      <AuthContainer>
        <AuthButton
          icon="lock-open"
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
