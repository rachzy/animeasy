import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import DefaultButton from "../../components/DefaultButton";
import validateDate from "../../functions/validateDate";

interface IInputs {
  username: string;
  email: string;
  password: string;
  confPassword: string;
  birthDay: number | "";
  birthMonth: number | "";
  birthYear: number | "";
}

interface IInputErrors {
  username: string;
  email: string;
  password: string;
  birthDate: string;
}

type inputs =
  | "username"
  | "email"
  | "password"
  | "confPassword"
  | "birthDay"
  | "birthMonth"
  | "birthYear";

const RegisterModal: React.FC<
  NativeStackScreenProps<RootStackParamList, "RegisterModal">
> = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: "",
    headerShown: true,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
    },
  });

  const [inputValues, setInputValues] = useState<IInputs>({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const [errorValues, setErrorValues] = useState<IInputErrors>({
    username: "",
    email: "",
    password: "",
    birthDate: "",
  });

  const handleInputChange = (name: inputs, text: string) => {
    if (
      (name === "birthDay" || name === "birthMonth" || name === "birthYear") &&
      isNaN(parseInt(text)) &&
      text !== ""
    )
      return;

    if (name === "birthDay" && parseInt(text) > 31) return;
    if (name === "birthMonth" && parseInt(text) > 12) return;
    if (name === "birthYear" && parseInt(text) > new Date().getFullYear())
      return;

    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [name]: text,
      };
    });
  };

  const [buttonLoading, toggleButtonLoading] = useState(false);

  function clearErrors() {
    let newErrorValues: IInputErrors | any = {};

    const getObjectValuesKeys = Object.keys(inputValues);
    getObjectValuesKeys.forEach((key) => {
      newErrorValues[key] = "";
    });

    setErrorValues(newErrorValues);
  }

  const handleButtonPress = () => {
    const {
      username,
      email,
      password,
      confPassword,
      birthDay,
      birthMonth,
      birthYear,
    } = inputValues;
    toggleButtonLoading(true)
    //Clear errors before start checking
    clearErrors();

    let newErrorValues: any = {};

    //Check if the user entered a valid username
    function validateUsernameLength() {
      //This function will simply check if the username follows the characters limit
      if (username.length > 2 && username.length < 22) return;
      newErrorValues.username =
        "Your username must be between 2 to 22 characters";
    }

    function validateUsernameCharacters() {
      //This function will check if the username has no spaces or invalid characters
      const invalidCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (username.split(" ").length === 1 && !invalidCharacters.test(username))
        return;
      newErrorValues.username =
        "Your username can't have spaces or special characters";
    }

    validateUsernameCharacters();
    validateUsernameLength();

    //Check if the email input contains a valid email address
    function validateEmailAddress() {
      if (
        email.length > 8 &&
        email.split("@").length >= 2 &&
        email.split(".").length >= 2
      )
        return;

      newErrorValues.email = "Enter a valid email address!";
    }
    validateEmailAddress();

    //Validate password
    function validatePasswordStrength() {
      const alphabet = /[a-zA-Z]/;
      const numbers = /\d/;
      if (
        password.length > 6 &&
        alphabet.test(password) &&
        numbers.test(password)
      )
        return;
      newErrorValues.password =
        "Your password must contain at least 6 characters, a letter and a number";
    }

    function validatePasswordMatching() {
      if (password === confPassword) return;
      newErrorValues.password = "The passwords don't match";
    }
    validatePasswordMatching();
    validatePasswordStrength();

    //Check if the date entered is valid
    function validateInputDate() {
      const validateEnteredDate = validateDate(
        Number(birthDay),
        Number(birthMonth),
        Number(birthYear)
      );
      if (validateEnteredDate) return;
      newErrorValues.birthDate = "Enter a valid date!";
    }
    validateInputDate();

    //Get all values from every single key from the newErrorValues const
    const getAllNewErrorValues = Object.values(newErrorValues).filter((value) => value)

    //If the length of the array is 0, then there are no errors
    if(getAllNewErrorValues.length === 0) return;
    toggleButtonLoading(false);
    setErrorValues(newErrorValues);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to Animeasy!</Text>
      <TextInput
        style={[styles.input, errorValues.username ? styles.inputError : {}]}
        textContentType={"username"}
        placeholder="Your username..."
        placeholderTextColor="gray"
        value={inputValues.username}
        onChangeText={(text) => {
          handleInputChange("username", text);
        }}
      />
      {errorValues.username && (
        <Text style={styles.errorMessage}>{errorValues.username}</Text>
      )}
      <TextInput
        style={[styles.input, errorValues.email ? styles.inputError : {}]}
        textContentType={"emailAddress"}
        placeholder="Your email address"
        placeholderTextColor="gray"
        value={inputValues.email}
        onChangeText={(text) => {
          handleInputChange("email", text);
        }}
      />
      {errorValues.email && (
        <Text style={styles.errorMessage}>{errorValues.email}</Text>
      )}
      <View style={[styles.smallInputContainer]}>
        <TextInput
          style={[styles.input, errorValues.password ? styles.inputError : {}]}
          secureTextEntry={true}
          textContentType={"password"}
          placeholder="Your password"
          placeholderTextColor="gray"
          value={inputValues.password}
          onChangeText={(text) => {
            handleInputChange("password", text);
          }}
        />
        <TextInput
          style={[styles.input, errorValues.password ? styles.inputError : {}]}
          secureTextEntry={true}
          textContentType={"password"}
          placeholder="Confirm your password"
          placeholderTextColor="gray"
          value={inputValues.confPassword}
          onChangeText={(text) => {
            handleInputChange("confPassword", text);
          }}
        />
      </View>
      {errorValues.password && (
        <Text style={styles.errorMessage}>{errorValues.password}</Text>
      )}
      <Text style={styles.inputContainerLabel}>Your birth date:</Text>
      <View style={styles.smallInputContainer}>
        <TextInput
          style={[
            styles.input,
            { textAlign: "center" },
            errorValues.birthDate ? styles.inputError : {},
          ]}
          placeholder="Day"
          placeholderTextColor="gray"
          value={inputValues.birthDay ? inputValues.birthDay.toString() : ""}
          onChangeText={(text) => {
            handleInputChange("birthDay", text);
          }}
        />
        <TextInput
          style={[
            styles.input,
            { textAlign: "center" },
            errorValues.birthDate ? styles.inputError : {},
          ]}
          placeholder="Month"
          placeholderTextColor="gray"
          value={
            inputValues.birthMonth ? inputValues.birthMonth.toString() : ""
          }
          onChangeText={(text) => {
            handleInputChange("birthMonth", text);
          }}
        />
        <TextInput
          style={[
            styles.input,
            { textAlign: "center" },
            errorValues.birthDate ? styles.inputError : {},
          ]}
          placeholder="Year"
          placeholderTextColor="gray"
          value={inputValues.birthYear ? inputValues.birthYear.toString() : ""}
          onChangeText={(text) => {
            handleInputChange("birthYear", text);
          }}
        />
      </View>
      {errorValues.birthDate && (
        <Text style={styles.errorMessage}>{errorValues.birthDate}</Text>
      )}
      <DefaultButton
        onPress={handleButtonPress}
        loadingAnimation={buttonLoading}
      >
        Register
      </DefaultButton>
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
    marginHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    maxHeight: 50,
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
  inputContainerLabel: {
    color: "#03DAC5",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    marginBottom: 20,
    marginTop: -10,
    textAlign: "center",
  },
  smallInputContainer: {
    height: 60,
    flexDirection: "row",
  },
});

export default RegisterModal;
