import { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View, Image } from "react-native";

import { UserGlobalContext } from "../App";
import { RootTabScreenProps } from "../types";

const UserTabScreen = ({ navigation }: RootTabScreenProps<"LoginTab">) => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerTitle: "",
    headerStyle: {
      backgroundColor: "transparent",
    },
  });
  const getUserGlobalContext = useContext(UserGlobalContext);
  if (!getUserGlobalContext) return null;

  const { data } = getUserGlobalContext.userContext;

  const user = {
    username: data?.username,
    pfp: require(`../assets/images/killua-icon.png`),
    banner: require(`../assets/shows/yourname-banner.jpg`),
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.userProfileContainer}>
        <View style={styles.bannerContainer}>
          <Image
            source={user.banner}
            style={styles.banner}
            resizeMode={"contain"}
          />
        </View>
        <Image source={user.pfp} style={styles.pfp} />
      </View>
      <View style={styles.userAboutContainer}>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(30, 30, 30)",
  },
  userProfileContainer: {
    height: 280,
    alignItems: "center",
  },
  bannerContainer: {
    overflow: "hidden",
    maxHeight: 200,
  },
  banner: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginTop: -100,
  },
  pfp: {
    position: "absolute",
    width: 150,
    height: 150,
    top: 120,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 70,
  },
  userAboutContainer: {
    flex: 1,
  },
  username: {
    color: "white",
    fontSize: 30,
    fontFamily: "Nunito",
  },
});

export default UserTabScreen;
