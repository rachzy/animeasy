/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  createNavigatorFactory,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import WatchTabScreen from "../screens/WatchTabScreen";
import LoginTabScreen from "../screens/LoginTabScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ShowAboutModal from "../screens/Modals/ShowAboutModal";
import VideoModal from "../screens/Modals/VideoModal";
import LoginModal from "../screens/Modals/LoginModal";
import RegisterModal from "../screens/Modals/RegisterModal";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(50, 50, 50)",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ShowAboutModal"
          component={ShowAboutModal}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="VideoModal"
          component={VideoModal}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen name="LoginModal" component={LoginModal} />
        <Stack.Screen name="RegisterModal" component={RegisterModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="WatchTab"
      screenOptions={{
        tabBarActiveTintColor: "#03DAC5",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "rgb(50, 50, 50)",
        },
        headerStyle: {
          backgroundColor: "rgb(50, 50, 50)",
        },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="WatchTab"
        component={WatchTabScreen}
        options={{
          title: "Watch",
          headerTintColor: "white",
          tabBarIcon: ({ color }) => <TabBarIcon name="tv" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="LoginTab"
        component={LoginTabScreen}
        options={{
          title: "Login",
          headerTintColor: "white",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
