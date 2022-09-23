import React from "react";
import Lottie from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AnimationWrapper,
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

      <AnimationWrapper>
        <Lottie
          key="animation"
          autoPlay={true}
          loop={true}
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>

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
          icon="account-plus"
          mode="contained"
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </AuthButton>
      </AuthContainer>
    </AuthBackground>
  );
};
