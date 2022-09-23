/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {ImageSourcePropType} from "react-native"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  WatchTab: undefined;
  LoginTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type Show = {
  id: number;
  title: string;
  description: string;
  thumbnail: ImageSourcePropType;
  hasStarted: boolean;
}

export interface IMovie extends Show {
  duration: number
  link: string;
}

type Episode = {
  number: number;
  title: string;
  description: string;
  duration: number;
  link: string;
}

export interface ISeries extends Show {
  amountOfEpisodes: number;
  episodes: Episode[]
}
