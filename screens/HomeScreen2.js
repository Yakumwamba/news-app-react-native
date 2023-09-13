import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import SearchIcon from "../icons/search-icon";
import MicrophoneIcon from "../icons/microphone-icon";
import image4 from "../static/image4.png";
import image3 from "../static/image3.png";

import SliderItem2 from "../components/slider-item2";

export default function HomeScreen2() {
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
            className="flex-1 flex-col px-4  gap-4"
          >
            <SliderItem2
              image={image3}
              description={"A Simple Trick For Creating Color Palettes Quickly"}
            />
            <SliderItem2
              image={image4}
              description={"Creating Color Palette from world around you"}
            />
          </ScrollView>
        </View>
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
