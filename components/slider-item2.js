import { View, Text, ImageBackground, StyleSheet } from "react-native";
import BookmarkIcon from "../icons/bookmark-icon";

export default function SliderItem2({ image, description }) {
  return (
    <View className="flex-1 mx-5 border-[#F3F4F6] mb-5 border-2 h-72 w-full rounded-2xl justify-center">
      <ImageBackground
        borderTopLeftRadius={18}
        borderTopRightRadius={18}
        source={image}
        className="flex-1 w-full  h-40"
        style={styles.image}
      >
        {/* <View className="z-10" style={{ position: 'absolute', top: -300, left: -20, right: -208, bottom: -120, justifyContent: 'center', alignItems: 'center' }}> 
        <BookmarkIcon color={'white'}/>
    </View> */}
      </ImageBackground>
      <View className="flex-1 mx-10 items-center pt-4 flex-row">
        <Text className=" w-full text-[#333647] font-semibold text-[16px]">
          {description}
        </Text>
        <BookmarkIcon color={"#333647"} />
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
    resizeMode: "stretch",
    borderRadius: 10,
  },
});
