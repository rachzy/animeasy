import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  TextInputChangeEventData,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";

import DefaultButton from "../../components/DefaultButton";
import { useState } from "react";
import { TextInputProps } from "react-native";

const LoginModal: React.FC<
  NativeStackScreenProps<RootStackParamList, "LoginModal">
> = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: "",
    headerShown: true,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
    },
  });

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [errorValues, setErrorValues] = useState({
    email: "",
    password: "",
  });

  const [toggleButtonLoading, setToggleButtonLoading] = useState(false);

  const handleButtonPress = () => {
    setToggleButtonLoading(true);
    setErrorValues({
      email: "",
      password: "",
    });
    setTimeout(() => {
      setToggleButtonLoading(false);
      setErrorValues({
        email: "Incorrect email or username",
        password: "Wrong password",
      });
    }, 2000);
  };

  const handleInputChange = (name: "email" | "password", text: string) => {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [name]: text,
      };
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={[styles.input, errorValues.email ? styles.inputError : {}]}
        textContentType={"emailAddress" || "text"}
        placeholder="Email or username"
        placeholderTextColor="gray"
        value={inputValues.email}
        onChangeText={(text) => {
          handleInputChange("email", text);
        }}
      />
      {errorValues.email && (
        <Text style={styles.errorMessage}>{errorValues.email}</Text>
      )}
      <TextInput
        style={[styles.input, errorValues.password ? styles.inputError : {}]}
        secureTextEntry={true}
        textContentType={"password"}
        placeholder="Password"
        placeholderTextColor="gray"
        value={inputValues.password}
        onChangeText={(text) => {
          handleInputChange("password", text);
        }}
      />
      {errorValues.password && (
        <Text style={styles.errorMessage}>{errorValues.password}</Text>
      )}
      <DefaultButton
        onPress={handleButtonPress}
        loadingAnimation={toggleButtonLoading}
      >
        Login
      </DefaultButton>
      <Pressable>
        <Text style={styles.forgotPasswordLabel}>Forgot your password?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    backgroundColor: "rgb(30, 30, 50)",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
  },
  input: {
    backgroundColor: "rgb(50, 50, 50)",
    padding: 10,
    marginBottom: 10,
    color: "white",
    shadowColor: "#000000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 28,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    opacity: 1,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    marginLeft: 5,
    marginBottom: 20,
    marginTop: -10,
  },
  forgotPasswordLabel: {
    color: "#03DAC5",
    textAlign: "center",
    fontSize: 16,
  },
});

export default LoginModal;
