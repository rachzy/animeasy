import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

interface IProps {
  onChange: (text: string) => void;
  value: string;
  onClick: () => void;
}

const SearchInput: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Content name..."
        placeholderTextColor={"gray"}
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
      <Pressable style={styles.button}>
        <FontAwesome name="search" color={"white"} size={18} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
  },
  input: {
    padding: 10,
    width: "70%",
    backgroundColor: "transparent",
    borderColor: "#03DAC5",
    color: "white",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  button: {
    backgroundColor: "#03DAC5",
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
})

export default SearchInput;
