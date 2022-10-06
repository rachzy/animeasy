import { useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { IUser } from "./types";

interface IUserGlobalContext {
  userContext: IUser;
  setUserContext: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserGlobalContext = createContext<IUserGlobalContext | null>(null);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [userContext, setUserContext] = useState<IUser>({
    isLoggedIn: false,
  });

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <UserGlobalContext.Provider
        value={{ userContext: userContext, setUserContext: setUserContext }}
      >
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
      </UserGlobalContext.Provider>
    </SafeAreaProvider>
  );
}
