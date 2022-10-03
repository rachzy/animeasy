import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Episode, RootStackParamList, Show } from "../../types";
import { FontAwesome } from "@expo/vector-icons";

import PlayButton from "../../components/PlayButton";
import EpisodeItem from "../../components/EpisodeItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "ShowAboutModal">;

const ShowAboutModal: React.FC<Props> = ({ route, navigation }) => {
  const { show, handlePlayPress } = route.params;
  navigation.setOptions({ title: show.title });

  const handleEpisodePlayPress = (episode: Episode) => {
    navigation.navigate("VideoModal", {
      title: episode.title,
      link: episode.link,
    });
  };

  return (
    <ScrollView style={styles.mainContainer} nestedScrollEnabled={true}>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} source={show.thumbnail} />
        <PlayButton
          onPress={handlePlayPress.bind(this, show)}
          style={{
            bottom: -30,
            right: 25,
            position: "absolute",
            alignSelf: "flex-end",
          }}
        />
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>
          {show.title} ({show.releaseYear})
        </Text>
        <View style={styles.starsContainer}>
          {}
          <FontAwesome name="star" color={show.rating >= 1 ? "yellow" : "gray"} size={18} />
          <FontAwesome name="star" color={show.rating >= 2 ? "yellow" : "gray"} size={18} />
          <FontAwesome name="star" color={show.rating >= 3 ? "yellow" : "gray"} size={18} />
          <FontAwesome name="star" color={show.rating >= 4 ? "yellow" : "gray"} size={18} />
          <FontAwesome name="star" color={show.rating >= 5 ? "yellow" : "gray"} size={18} />
        </View>
        <Text style={styles.description}>{show.description}</Text>
        {show.episodes ? (
          <View>
            <Text style={[styles.title, { fontSize: 20 }]}>
              Episodes ({show.episodes.length})
            </Text>
            <FlatList
              data={show.episodes}
              renderItem={(itemData) => {
                const { item } = itemData;
                return (
                  <EpisodeItem
                    episode={item}
                    onPlayPress={handleEpisodePlayPress.bind(this, item)}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id.toString() + index.toString();
              }}
              alwaysBounceVertical={true}
            />
          </View>
        ) : (
          <Text style={[styles.title, { color: "white", fontSize: 18 }]}>
            {show.duration} min
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgb(30, 30, 30)",
  },
  thumbnailContainer: {
    borderBottomColor: "#03DAC5",
    borderBottomWidth: 2,
  },
  thumbnail: {
    width: "100%",
    height: 300,
  },
  starsContainer: {
    flexDirection: "row",
    paddingBottom: 20
  },
  aboutContainer: {
    padding: 20,
  },
  title: {
    color: "#03DAC5",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "900",
    paddingBottom: 10,
  },
  description: {
    color: "white",
    paddingBottom: 20,
  },
});

export default ShowAboutModal;
