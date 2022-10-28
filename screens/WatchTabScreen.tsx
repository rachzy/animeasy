import { useContext, useEffect } from "react";
import { Fragment, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FadeInView from "../components/FadeInView";
import ShowItem from "../components/ShowItem";

import { RootTabScreenProps, Show } from "../types";

import { ShowsGlobalContext } from "../App";
import ShowList from "../components/ShowList";

export default function WatchTabScreen(
  this: any,
  { navigation }: RootTabScreenProps<"WatchTab">
) {
  const [shows, setShows] = useState<Show[]>([]);
  const [selectedOption, setSelectedOption] = useState<"series" | "movie">(
    "series"
  );

  const getShowsContext = useContext(ShowsGlobalContext);

  //Fetch shows
  useEffect(() => {
    const fetchShows = async () => {
      try {
        if (!getShowsContext) return;
        setShows(getShowsContext);
      } catch (e) {
        console.log(e);
      }
    };
    fetchShows();
  }, []);

  const handleOptionPress = (optionTitle: "series" | "movie") => {
    if (selectedOption === optionTitle) return;
    setSelectedOption(optionTitle);
  };

  return (
    <FadeInView duration={200} style={styles.container}>
      <SafeAreaView style={styles.container}>
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
        <ShowList
          shows={shows.filter((show) => show.type === selectedOption)}
        />
      </SafeAreaView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(30, 30, 30)",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
