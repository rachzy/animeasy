import { FontAwesome } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView, Text, View, Image } from "react-native";

import ShowList from "../components/ShowList";

import { UserGlobalContext } from "../App";
import { RootTabScreenProps } from "../types";

import { ShowsGlobalContext } from "../App";

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
  const shows = useContext(ShowsGlobalContext);
  if (!getUserGlobalContext || !shows) return null;

  const { data } = getUserGlobalContext.userContext;

  const user = {
    ...data,
    pfp: require(`../assets/images/killua-icon.png`),
    banner: require(`../assets/shows/yourname-banner.jpg`),
  };

  const [selectedMenu, setSelectedMenu] = useState<"watched" | "favorite">(
    "watched"
  );

  const handleMenuPress = (menuId: "watched" | "favorite") => {
    setSelectedMenu(menuId);
  };

  const renderShowsBySelectedMenu = () => {
    if (selectedMenu === "watched") {
      if (!user.watchedShows) return [];
      return user.watchedShows.map((watchedShow) => {
        return shows.filter((show) => show.id === watchedShow.id)[0];
      });
    }
    if (!user.favoriteShows) return [];
    return user.favoriteShows.map((favoriteShow) => {
      return shows.filter((show) => show.id === favoriteShow.id)[0];
    });
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
            onPress={handleMenuPress.bind(this, "watched")}
          >
            <FontAwesome
              name="clone"
              color={selectedMenu === "watched" ? "#03DAC5" : "gray"}
              size={24}
            />
          </Pressable>
          <Pressable
            style={styles.iconContainer}
            onPress={handleMenuPress.bind(this, "favorite")}
          >
            <FontAwesome
              name="star-o"
              color={selectedMenu === "favorite" ? "#03DAC5" : "gray"}
              size={24}
            />
          </Pressable>
        </View>
        <View
          style={[
            styles.selectBar,
            selectedMenu === "favorite" && { alignSelf: "flex-end" },
          ]}
        />
        <ShowList shows={renderShowsBySelectedMenu()} itemSize={320} />
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
    marginBottom: 20,
  },
});

export default UserTabScreen;
