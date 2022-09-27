import { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const FadeInView: React.FC<IProps> = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return <Animated.View style={{opacity: fadeAnim}}>{children}</Animated.View>;
};

export default FadeInView;
