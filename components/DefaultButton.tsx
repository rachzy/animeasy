import { Button, Pressable, StyleSheet, Text, View } from "react-native";

interface IProps {
  children: string;
  color?: string;
  style?: {};
  onPress?: () => void;
}

const DefaultButton: React.FC<IProps> = ({
  children,
  color,
  onPress,
  style,
}) => {
  return (
    <View style={[styles.button, color && { backgroundColor: color }, style]}>
      <Pressable onPress={onPress} android_ripple={{color: "rgba(0, 0, 0, 0.3)"}} style={{padding: 10}}>
        <Text style={styles.buttonLabel}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#03DAC5",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonLabel: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DefaultButton;
