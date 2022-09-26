import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IProps {
    style?: {}
    onPress?: () => void
}

const PlayButton: React.FC<IProps> = ({style, onPress}) => {
    return(
        <Pressable onPress={onPress} style={[styles.playButton, style]}>
          <FontAwesome name="play" size={24} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    playButton: {
        width: 60,
        height: 60,
        backgroundColor: "#03DAC5",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24,
      },
})

export default PlayButton