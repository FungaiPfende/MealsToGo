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
<<<<<<< HEAD

      <Title>Meals To Go</Title>

=======
      <Title>Meals To Go</Title>
>>>>>>> c9582d0d7fc13f9a4540a68536fdb495c4fe83e7
      <AuthContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
<<<<<<< HEAD
          onChangeText={(e) => setEmail(e)}
=======
          onChangeText={(u) => setEmail(u)}
>>>>>>> c9582d0d7fc13f9a4540a68536fdb495c4fe83e7
        />

        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
<<<<<<< HEAD
            autoCapitalize="none"
            secureTextEntry
=======
            secureTextEntry
            autoCapitalize="none"
>>>>>>> c9582d0d7fc13f9a4540a68536fdb495c4fe83e7
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {error && (
<<<<<<< HEAD
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
=======
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
>>>>>>> c9582d0d7fc13f9a4540a68536fdb495c4fe83e7
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
