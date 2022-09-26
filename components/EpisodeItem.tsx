import { View, Image, Text, StyleSheet, Pressable } from "react-native";

import { Episode } from "../types";
import PlayButton from "./PlayButton";

interface IProps {
  episode: Episode
}

const EpisodeItem: React.FC<IProps> = ({ episode }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.thumbnail}
          source={episode.thumbnail}
          blurRadius={2}
        />
      </View>
      <View style={styles.label}>
        <View style={styles.labelText}>
          <Text style={styles.labelTitle}>{episode.title}</Text>
            <Text>{episode.duration} min</Text>
        </View>
        <PlayButton style={{ top: -25, left: -30 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#03DAC5",
    width: 370,
    height: 250,
    marginVertical: 10,
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
    backgroundColor: "white",
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
    borderColor: "#03DAC5",
    borderWidth: 1,
    borderTopWidth: 2,
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
