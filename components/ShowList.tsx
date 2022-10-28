import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Fragment } from "react";
import { FlatList } from "react-native";

import { RootStackParamList, Show } from "../types";
import ShowItem from "./ShowItem";

interface IProps {
  shows: Show[];
  itemSize?: number;
}

const ShowList: React.FC<IProps> = ({ shows, itemSize }) => {
  return (
    <Fragment>
      <FlatList
        data={shows}
        renderItem={(itemData) => {
          const { item } = itemData;
          return <ShowItem show={item} showType={item.type} size={itemSize} />;
        }}
        keyExtractor={(item, index) => {
          return item.id.toString() + index.toString();
        }}
      />
    </Fragment>
  );
};

export default ShowList;
