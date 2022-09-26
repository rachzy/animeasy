import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { Episode, Show } from "../types";

import PlayButton from "../components/PlayButton";
import ShowItem from "../components/ShowItem";
import EpisodeItem from "../components/EpisodeItem";

const ShowAboutModal: React.FC<any> = ({ route, navigation }) => {
  const show: Show = route.params.show;
  navigation.setOptions({ title: show.title });
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} source={show.thumbnail} />
        <PlayButton
          style={{
            bottom: -30,
            right: 25,
            position: "absolute",
            alignSelf: "flex-end",
          }}
        />
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>{show.title}</Text>
        <Text>{show.description}</Text>
        {show.episodes ? (
          <FlatList
            data={show.episodes}
            renderItem={(itemData) => {
              const { item } = itemData;
              return <EpisodeItem episode={item} />;
            }}
            keyExtractor={(item, index) => {
              return item.id.toString() + index.toString();
            }}
            alwaysBounceVertical={true}
          />
        ) : (
          <Text>{show.duration} min</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    borderBottomColor: "#03DAC5",
    borderBottomWidth: 2,
  },
  thumbnail: {
    width: "100%",
    height: 300,
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
});

export default ShowAboutModal;
