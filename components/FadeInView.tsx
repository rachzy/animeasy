import { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: {}
  duration?: number;
}

const FadeInView: React.FC<IProps> = ({ children, duration, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration || 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return <Animated.View style={[style, {opacity: fadeAnim}]}>{children}</Animated.View>;
};

export default FadeInView;
