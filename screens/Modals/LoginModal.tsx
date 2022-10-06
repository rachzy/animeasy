import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";

import DefaultButton from "../../components/DefaultButton";

import { UserGlobalContext } from "../../App";
import { useContext } from "react";

import DummyDatabase from "../../dummyDatabase.json";

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

  const getUserGlobalContext = useContext(UserGlobalContext);
  if (!getUserGlobalContext) return null;

  const { setUserContext } = getUserGlobalContext;

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

      const getUser = DummyDatabase.users.filter(
        (user) =>
          (user.email === inputValues.email ||
            user.username === inputValues.email) &&
          user.password === inputValues.password
      );

      if (getUser.length !== 1) {
        return setErrorValues({
          email: "Invalid email address or usename",
          password: "Invalid password",
        });
      }

      setUserContext({
        data: {
          id: getUser[0].id,
          username: getUser[0].username,
          profilePicture: getUser[0].profilePicture,
          bannerPicture: getUser[0].bannerPicture,
          watchedShows: getUser[0].watchedShows,
        },
        security: { token: getUser[0].token },
        isLoggedIn: true,
      });
      navigation.navigate("Root", { screen: "LoginTab" });
    }, 500);
  };

  const handleInputChange = (name: "email" | "password", text: string) => {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [name]: text,
      };
    });
  };

  const debugFunction = () => {
    const getUser = DummyDatabase.users.filter(
      (user) => user.username === "rach" && user.password === "contarach01"
    );

    setUserContext({
      data: {
        id: getUser[0].id,
        username: getUser[0].username,
        profilePicture: getUser[0].profilePicture,
        bannerPicture: getUser[0].bannerPicture,
        watchedShows: getUser[0].watchedShows,
      },
      security: { token: getUser[0].token },
      isLoggedIn: true,
    });
    navigation.navigate("Root", { screen: "LoginTab" });
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
      <Pressable onPress={debugFunction}>
        <Text style={styles.forgotPasswordLabel}>Debug</Text>
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
