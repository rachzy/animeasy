import { Fragment, useState } from "react";

import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import MovieItem from "../components/MovieItem";
import SeriesItem from "../components/SeriesItem";

import { IMovie, ISeries, RootTabScreenProps } from "../types";

interface IShows {
  movies: IMovie[];
  series: ISeries[];
}

export default function WatchTabScreen(
  this: any,
  { navigation }: RootTabScreenProps<"WatchTab">
) {
  const [shows, setShows] = useState<IShows>({
    movies: [
      {
        id: 1,
        title: "Your Name",
        description:
          "Your Name is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies",
        thumbnail: require("../assets/shows/yourname-banner.jpg"),
        duration: 120,
        hasStarted: false,
        link: "youtube.com",
      },
    ],
    series: [
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
      {
        id: 2,
        title: "Hunter x Hunter",
        description:
          "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
        amountOfEpisodes: 115,
        episodes: [
          {
            number: 1,
            title: "Firsttt",
            description: "Tired of googling",
            duration: 20,
            link: "youtube.com",
          },
        ],
        hasStarted: false,
        thumbnail: require("../assets/shows/hxh-banner.jpg"),
      },
    ],
  });
  const [selectedOption, setSelectedOption] = useState<"series" | "movies">(
    "series"
  );

  const handleOptionPress = (optionTitle: "series" | "movies") => {
    if (selectedOption === optionTitle) return;
    setSelectedOption(optionTitle);
  };

  const renderShows = () => {
    if (!shows.movies || !shows.series) return;
    return (
      <Fragment>
        {selectedOption === "series" ? (
          <FlatList
            data={shows.series}
            renderItem={(itemData) => {
              const { item } = itemData;
              return <SeriesItem series={item} />;
            }}
            keyExtractor={(item, index) => {
              return item.id.toString() + index.toString();
            }}
          />
        ) : (
          <FlatList
            data={shows.movies}
            renderItem={(itemData) => {
              const { item } = itemData;
              return <MovieItem movie={item} />;
            }}
            keyExtractor={(item, index) => {
              return item.id.toString() + index.toString();
            }}
          />
        )}
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
          onPress={handleOptionPress.bind(this, "movies")}
          style={[
            styles.showTypeOption,
            selectedOption === "movies" && styles.optionSelected,
          ]}
        >
          <Text
            style={[
              styles.showTypeOptionLabel,
              selectedOption === "movies" && styles.labelSelected,
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
