import { useEffect } from "react";
import { View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import WebView from "react-native-webview";

type Props = NativeStackScreenProps<RootStackParamList, "VideoModal">;

const VideoModal: React.FC<Props> = ({ route, navigation }) => {
  const { title, link } = route.params;
  useEffect(() => {
    navigation.setOptions({ headerTransparent: true, headerTitle: title });
    setTimeout(() => {
      navigation.setOptions({ headerTitle: "" });
    }, 4000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: link }}
      />
    </View>
  );
};

export default VideoModal;
