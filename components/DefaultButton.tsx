import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import LoadingSpinner from "./LoadingSpinner";
interface IProps {
  children: string;
  loadingAnimation?: boolean;
  color?: string;
  style?: {};
  onPress?: () => void;
}

const DefaultButton: React.FC<IProps> = ({
  children,
  color,
  onPress,
  loadingAnimation,
  style,
}) => {
  return (
    <View style={[styles.button, color && { backgroundColor: color }, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "rgba(0, 0, 0, 0.3)" }}
        style={styles.pressableContainer}
      >
        {loadingAnimation ? (
          <LoadingSpinner
            color="white"
            durationMs={1000}
            size={22}
          />
        ) : (
          <Text style={styles.buttonLabel}>{children}</Text>
        )}
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
  pressableContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonLabel: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DefaultButton;
