import { View, Image, Text, StyleSheet, Pressable } from "react-native";

import { Episode } from "../types";
import PlayButton from "./PlayButton";

interface IProps {
  episode: Episode;
  onPlayPress: () => void;
}

const EpisodeItem: React.FC<IProps> = ({ episode, onPlayPress }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.thumbnail}
          source={episode.thumbnail}
          blurRadius={2}
        />
      </View>
      <View style={styles.label}>
        <View style={styles.labelText}>
          <Text style={styles.labelTitle}>{episode.title}</Text>
          <Text style={{ color: "white" }}>{episode.duration} min</Text>
        </View>
      </View>
      <PlayButton
        onPress={onPlayPress}
        style={{ flex: 1, width: 50, height: 50, left: -5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#03DAC5",
    width: "100%",
    height: 70,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderStartColor: "rgba(0, 0, 0, 0.4)",
    borderEndColor: "rgba(0, 0, 0, 0.1)",
  },
  label: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
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

export default EpisodeItem;
