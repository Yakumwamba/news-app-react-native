import { View, Text, ImageBackground, StyleSheet } from "react-native";
import BookmarkIcon from "../icons/bookmark-icon";

export default function SliderItem({ image, title, description }) {
  return (
    <View className="flex-1 ml-4  h-64 w-64 justify-center">
      <ImageBackground
        borderRadius={18}
        source={image}
        className="flex-1  rounded-2xl"
        style={styles.image}
      >
        <View
          className="z-10"
          style={{
            position: "absolute",
            top: -300,
            left: -20,
            right: -208,
            bottom: -120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BookmarkIcon color={"white"} />
        </View>
        <View
          className="flex-col mx-4 "
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 100,
            bottom: -120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="z-10 self-start  text-white font-light">
            POLITICS
          </Text>
          <Text className="z-10 self-start w-56 text-white font-semibold text-[16px]">
            The latest situation in the presidential election
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    borderRadius: 10,
  },
});
