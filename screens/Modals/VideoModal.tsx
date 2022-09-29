import { MutableRefObject, useEffect } from "react";
import { View, ViewComponent } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import WebView, { WebViewProps } from "react-native-webview";
import { useRef } from "react";
import { LegacyRef } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "VideoModal">;

const VideoModal: React.FC<Props> = ({ route, navigation }) => {
  const { title, link } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: "transparent",
      },
    });
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
