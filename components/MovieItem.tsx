import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { IMovie } from "../types";

interface IProps {
  movie: IMovie;
}

const MovieItem: React.FC<IProps> = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={movie.thumbnail} blurRadius={2} />
      <View style={styles.label}>
        <View style={styles.labelText}>
          <Text style={styles.labelTitle}>{movie.title}</Text>
          <Text>{movie.duration} min</Text>
        </View>
        <View style={styles.labelPlayButton}>
          <FontAwesome name="play" size={24} />
        </View>
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
    marginVertical: 10
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderStartColor: "rgba(0, 0, 0, 0.4)",
    borderEndColor: "rgba(0, 0, 0, 0.1)"
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
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24,
    borderColor: "#03DAC5",
    borderWidth: 1,
    borderTopWidth: 2
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
  labelPlayButton: {
    width: 60,
    height: 60,
    top: -25,
    left: -30,
    backgroundColor: "#03DAC5",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
  }
});

export default MovieItem;
