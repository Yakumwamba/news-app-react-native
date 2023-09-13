import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import SearchIcon from "../icons/search-icon";
import MicrophoneIcon from "../icons/microphone-icon";
import image1 from "../static/image1.png";
import image2 from "../static/image3.png";
import bookmarkImage1 from "../static/bookmark1.png";
import bookmarkImage2 from "../static/bookmark2.png";
import Bookmark from "../components/bookmark";
import SliderItem from "../components/slider-item";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView className="px-4 bg-white">
      <View className="flex-1 pt-10 justify-start">
        <View className="flex-1 flex-col pt-10 ">
          <Text className="text-2xl font-semibold">Browse</Text>
          <Text className="text-lg text-[#7C82A1]">
            Discover things of this world
          </Text>

          {/* SearchBox */}
          <View className="flex-1  mt-10  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <SearchIcon />
              <TextInput
                placeholder="Search"
                placeholderTextColor={"#7C82A1"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
            <MicrophoneIcon className="self-center flex-1 pr-10" />
          </View>
          {/* SearchBox */}

          <ScrollView horizontal className="pt-10 pb-10 gap-4">
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#475AD7]">
              <Text className="text-white font-bold">Random</Text>
            </View>
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#F3F4F6]">
              <Text className="text-[#7C82A1] font-bold">Sports</Text>
            </View>
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#F3F4F6]">
              <Text className="text-[#7C82A1] font-bold">Gaming</Text>
            </View>
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#F3F4F6]">
              <Text className="text-[#7C82A1] font-bold">Politics</Text>
            </View>
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#F3F4F6]">
              <Text className="text-[#7C82A1] font-bold">Politics</Text>
            </View>
            <View className=" flex-1 items-center px-4 py-2 rounded-full bg-[#F3F4F6]">
              <Text className="text-[#7C82A1] font-bold">Finance</Text>
            </View>
          </ScrollView>

          {/* Images scrollview */}
          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            horizontal
            className="flex-1"
          >
            <Pressable
              onPress={() => {
                navigation.navigate("HomeScreen2");
              }}
            >
              <SliderItem image={image1} />
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("HomeScreen2");
              }}
            >
              <SliderItem image={image2} />
            </Pressable>
          </ScrollView>
        </View>
      </View>
      {/* Recommmendations */}
      <View className="gap-1 my-5 flex-col">
        <View className="flex-1 flex-row justify-between items-center my-10">
          <Text className="text-[20px] font-semibold">Recommended for you</Text>
          <Text>See All</Text>
        </View>
        {/* Bookmarks */}

        <Bookmark
          image={bookmarkImage1}
          title={"UI/UX Design"}
          description={"A Simple Trick For Creating Color Palettes Quickly"}
        />
        <Bookmark
          image={bookmarkImage2}
          title={"Art"}
          description={"Six steps to creating a color palette"}
        />
      </View>
    </ScrollView>
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
