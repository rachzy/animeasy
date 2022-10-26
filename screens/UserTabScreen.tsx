import { FontAwesome } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
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

  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuPress = (menuNumber: number) => {
    setSelectedMenu(menuNumber);
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
        <View style={styles.iconsContainer}>
          <Pressable
            style={styles.iconContainer}
            onPress={handleMenuPress.bind(this, 1)}
          >
            <FontAwesome
              name="clone"
              color={selectedMenu === 1 ? "#03DAC5" : "gray"}
              size={24}
            />
          </Pressable>
          <Pressable
            style={styles.iconContainer}
            onPress={handleMenuPress.bind(this, 2)}
          >
            <FontAwesome
              name="star-o"
              color={selectedMenu === 2 ? "#03DAC5" : "gray"}
              size={24}
            />
          </Pressable>
        </View>
        <View
          style={[
            styles.selectBar,
            selectedMenu === 2 && { alignSelf: "flex-end" },
          ]}
        />
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
    width: "100%",
  },
  username: {
    color: "white",
    fontSize: 30,
    fontFamily: "Nunito",
    textAlign: "center",
  },
  iconsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  selectBar: {
    width: "50%",
    backgroundColor: "#03DAC5",
    borderRadius: 20,
    height: 3,
    marginTop: -20,
  },
});

export default UserTabScreen;
