import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";

import DefaultButton from "../../components/DefaultButton";
import { useState } from "react";

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

  const [toggleButtonLoading, setToggleButtonLoading] = useState(false);

  const handleButtonPress = () => {
    setToggleButtonLoading(true);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={styles.input}
        textContentType={"emailAddress" || "text"}
        placeholder="Email or username"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        textContentType={"password"}
        placeholder="Password"
        placeholderTextColor="gray"
      />
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
  forgotPasswordLabel: {
    color: "#03DAC5",
    textAlign: "center",
    fontSize: 16,
  },
});

export default LoginModal;
