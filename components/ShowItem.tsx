import { View, Image, Text, StyleSheet, Pressable } from "react-native";

import FadeInView from "./FadeInView";
import PlayButton from "./PlayButton";

import { Show } from "../types";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  show: Show;
  showType: "movie" | "series";
  size?: number;
}

const ShowItem: React.FC<IProps> = ({ show, showType, size }) => {
  const navigation = useNavigation();
  const handlePlayButtonPress = () => {
    navigation.navigate("VideoModal", {
      title:
        show.type === "movie"
          ? show.title
          : (show.episodes && show.episodes[0].title) || "",
      link:
        (show.type === "movie"
          ? show.link
          : show.episodes && show.episodes[0].link) || "",
    });
  };

  const handleImagePress = () => {
    navigation.navigate("ShowAboutModal", {
      show: show,
      handlePlayPress: handlePlayButtonPress,
    });
  };
  return (
    <FadeInView
      style={[styles.container, size && { width: size, height: size - 120 }]}
    >
      <Pressable onPress={handleImagePress.bind(this, show)}>
        <Image style={styles.thumbnail} source={show.thumbnail} />
      </Pressable>
      <View style={styles.label}>
        <View style={styles.labelText}>
          <Text style={styles.labelTitle}>{show.title}</Text>

          {showType === "series" ? (
            <Text style={{ color: "white" }}>
              {show.amountOfEpisodes} episodes
            </Text>
          ) : (
            <Text style={{ color: "white" }}>{show.duration} min</Text>
          )}
        </View>
        <PlayButton
          style={{ top: -25, left: -30 }}
          onPress={handlePlayButtonPress.bind(this, show)}
        />
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#03DAC5",
    width: 370,
    height: 250,
    marginVertical: 10,
    alignSelf: "center",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderStartColor: "rgba(0, 0, 0, 0.4)",
    borderEndColor: "rgba(0, 0, 0, 0.1)",
  },
  label: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(50, 50, 50)",
    height: 60,
    marginTop: -60,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    opacity: 0.9,
  },
  labelText: {
    padding: 5,
  },
  labelTitle: {
    color: "#03DAC5",
    fontStyle: "italic",
    fontWeight: "900",
    fontSize: 20,
  },
});

export default ShowItem;
