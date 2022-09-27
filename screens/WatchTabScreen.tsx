import { Fragment, useState } from "react";

import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import ShowItem from "../components/ShowItem";

import { RootTabScreenProps, Show } from "../types";

export default function WatchTabScreen(
  this: any,
  { navigation }: RootTabScreenProps<"WatchTab">
) {
  const [shows, setShows] = useState<Show[]>([
    {
      id: 1,
      type: "movie",
      title: "Your Name",
      description:
        "Your Name is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies",
      thumbnail: require("../assets/shows/yourname-banner.jpg"),
      duration: 120,
      hasStarted: false,
      link: "youtube.com",
    },

    {
      id: 2,
      type: "series",
      title: "Hunter x Hunter",
      description:
        "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
      amountOfEpisodes: 115,
      episodes: [
        {
          id: 12,
          number: 1,
          title: "Firsttt",
          thumbnail: require("../assets/shows/hxh-banner.jpg"),
          description: "Tired of googling",
          duration: 20,
          link: "youtube.com",
          hasStarted: false,
        },
        {
          id: 11,
          number: 2,
          title: "Secondddd",
          thumbnail: require("../assets/shows/hxh-banner.jpg"),
          description: "Tired of googling",
          duration: 20,
          link: "youtube.com",
          hasStarted: false,
        },
      ],
      hasStarted: false,
      thumbnail: require("../assets/shows/hxh-banner.jpg"),
    },
  ]);
  const [selectedOption, setSelectedOption] = useState<"series" | "movie">(
    "series"
  );

  const handleOptionPress = (optionTitle: "series" | "movie") => {
    if (selectedOption === optionTitle) return;
    setSelectedOption(optionTitle);
  };

  const handleShowImagePress = (show: Show) => {
    navigation.navigate("ShowAboutModal", { show: show });
  };

  const renderShows = () => {
    return (
      <Fragment>
        <FlatList
          data={shows}
          renderItem={(itemData) => {
            const { item } = itemData;
            if(item.type !== selectedOption) return null;
            return (
              <ShowItem
                show={item}
                showType={item.type}
                handleImagePress={handleShowImagePress}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id.toString() + index.toString();
          }}
        />
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.showTypeSelector}>
        <Pressable
          onPress={handleOptionPress.bind(this, "series")}
          style={[
            styles.showTypeOption,
            selectedOption === "series" && styles.optionSelected,
          ]}
        >
          <Text
            style={[
              styles.showTypeOptionLabel,
              selectedOption === "series" && styles.labelSelected,
            ]}
          >
            Series
          </Text>
        </Pressable>
        <Pressable
          onPress={handleOptionPress.bind(this, "movie")}
          style={[
            styles.showTypeOption,
            selectedOption === "movie" && styles.optionSelected,
          ]}
        >
          <Text
            style={[
              styles.showTypeOptionLabel,
              selectedOption === "movie" && styles.labelSelected,
            ]}
          >
            Movies
          </Text>
        </Pressable>
      </View>
      {renderShows()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgb(10, 10, 10)"
  },
  showTypeSelector: {
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#03DAC5",
    overflow: "hidden",
    marginBottom: 5,
  },
  showTypeOption: {
    paddingVertical: 7,
    paddingHorizontal: 30,
  },
  showTypeOptionLabel: {
    fontSize: 15,
    color: "#03DAC5",
  },
  optionSelected: {
    backgroundColor: "#03DAC5",
  },
  labelSelected: {
    color: "white",
    fontWeight: "900",
    fontStyle: "italic",
  },
});
