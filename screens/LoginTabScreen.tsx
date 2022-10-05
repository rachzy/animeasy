import { Animated, View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultButton from "../components/DefaultButton";
import FadeInView from "../components/FadeInView";
import { RootTabScreenProps } from "../types";

const LoginTabScreen = ({navigation}: RootTabScreenProps<"LoginTab">) => {
  const banner = require("../assets/images/killua-icon.png");

  const handleLoginButtonPress = () => {
    navigation.navigate("LoginModal");
  }

  const handleRegisterButtonPress = () => {
    navigation.navigate("RegisterModal");
  }

  return (
    <FadeInView style={styles.container}>
      <View style={styles.bannerTitleContainer}>
        <Image style={styles.banner} source={banner} />
        <Text style={styles.title}>Animeasy</Text>
      </View>
      <View style={{width: "90%"}}>
        <DefaultButton onPress={handleLoginButtonPress}>Log in</DefaultButton>
        <DefaultButton onPress={handleRegisterButtonPress} color="rgb(50, 50, 50)">Register</DefaultButton>
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgb(30, 30, 50)",
  },
  bannerTitleContainer: {
    position: "absolute",
    top: 100,
    left: 50,
  },
  banner: {
    width: 290,
    height: 280,
  },
  title: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "space-mono",
  },
  button: {
    marginBottom: 20,
    width: "90%",
  },
});

export default LoginTabScreen;
