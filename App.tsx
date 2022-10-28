import { useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { IUser, Show } from "./types";

interface IUserGlobalContext {
  userContext: IUser;
  setUserContext: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserGlobalContext = createContext<IUserGlobalContext | null>(null);
export const ShowsGlobalContext = createContext<Show[] | null>(null);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [userContext, setUserContext] = useState<IUser>({
    isLoggedIn: false,
  });

  const dummyShows: Show[] = [
    {
      id: 1,
      type: "movie",
      title: "Your Name",
      description:
        "Your Name is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies",
      thumbnail: require(`./assets/shows/yourname-banner.jpg`),
      duration: 120,
      releaseYear: 2016,
      rating: 3,
      link: "https://www.trueliketop.org/play/player/serverjw.php?f=kimi-no-na-wa/leg.mp4",
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
          title: "Departure × And × Friends",
          thumbnail: require(`./assets/shows/hxh-banner.jpg`),
          description: "Tired of googling",
          duration: 20,
          link: "https://www.xpanimes.com/videozin/video-play.mp4/yt.php?contentId=bFU3R01HVGVPOUEwZHN6c2xkdEhPZWxXdEs3bEZOSzJueFlCZFozYzlpRT0=",
        },
        {
          id: 11,
          number: 2,
          title: "Test × of × Tests",
          thumbnail: require(`./assets/shows/hxh-banner.jpg`),
          description: "Tired of googling",
          duration: 23,
          link: "https://www.xpanimes.com/videozin/video-play.mp4/yt.php?contentId=Yi9IZ2VCclhGbWN0aWg4eThadUg5ZWxXdEs3bEZOSzJueFlCZFozYzlpRT0=",
        },
      ],
      thumbnail: require(`./assets/shows/hxh-banner.jpg`),
      releaseYear: 2011,
      rating: 4,
    },
  ];

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <UserGlobalContext.Provider
        value={{ userContext: userContext, setUserContext: setUserContext }}
      >
        <ShowsGlobalContext.Provider value={dummyShows}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="light" />
        </ShowsGlobalContext.Provider>
      </UserGlobalContext.Provider>
    </SafeAreaProvider>
  );
}
