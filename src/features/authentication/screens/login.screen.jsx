import React, { useState, useContext } from "react";
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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthContext);

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
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large">
          <AuthButton
            icon="lock-open"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AuthContainer>

      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AuthBackground>
  );
};
