import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function Bookmark({ image, title, description }) {
  return (
    <View className="flex-1 mx-2 mb-4 flex-row h-auto items-center">
      <View className="flex-2 pr-5">
        <ImageBackground
          borderRadius={18}
          source={image}
          className="rounded-2xl h-24 w-24"
          style={styles.image}
        ></ImageBackground>
      </View>

      <View className="flex-1 gap-2 flex-col w-auto">
        <Text className="px-4 font-thin text-sm">{title}</Text>
        <Text className="w-full px-4 text-lg font-semibold">{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
