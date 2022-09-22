import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AuthBackground,
  AuthCover,
  AuthContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/authentication.styles";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthContext);

  return (
    <AuthBackground>
      <AuthCover />

      <Title>Meals To Go</Title>

      <AuthContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />

        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={repeatedPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="account-plus"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Sign Up
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AuthContainer>

      <Spacer size="large">
        <AuthButton
          mode="contained"
          icon="arrow-left-bold"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AuthBackground>
  );
};
