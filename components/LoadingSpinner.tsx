import { useEffect, useRef } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Animated, View, StyleSheet, Easing } from "react-native";

interface IProps {
  color: string;
  durationMs: number;
  style?: StyleProp<ViewStyle>;
  size?: number;
}

const startRotationAnimation = (
  durationMs: number,
  rotationDegree: Animated.Value
): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  ).start();
};

const LoadingSpinner: React.FC<IProps> = ({
  color,
  durationMs = 1000,
  style,
  size,
}): JSX.Element => {
  loaderSize = size || 24;
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <View
        style={[
          styles.background,
          { borderColor: color },
          size ? { width: size, height: size } : {},
          style,
        ]}
      />
      <Animated.View
        style={[
          styles.progress,
          { borderTopColor: color },
          size ? { width: size, height: size } : {},
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

let loaderSize = 24;

const styles = StyleSheet.create({
  container: {
    width: loaderSize,
    height: loaderSize,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: loaderSize / 2,
    borderWidth: 4,
    opacity: 0.25,
  },
  progress: {
    width: "100%",
    height: "100%",
    borderRadius: loaderSize / 2,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 4,
    position: "absolute",
  },
});

export default LoadingSpinner;
