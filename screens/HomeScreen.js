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
import PopularDestination from "../components/popularDestinationsCard";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView className="px-4 bg-[#E3EAE8]">
    <View className="flex-1 flex-col pt-10 justify-start ">
      <View className="flex-1 flex-col pt-10  ">
        <Text className="text-2xl font-semibold">Hi Kape</Text>
        <Text className="text-3xl text-[#20463C]">
        Where are you going?
        </Text>
         {/* SearchBox */}
         <View className="flex-1  mt-10  rounded-xl flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <SearchIcon />
              <TextInput
                placeholder="Search"
                placeholderTextColor={"#20463C"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
            <MicrophoneIcon className="self-center flex-1 pr-10" />
          </View>
          {/* SearchBox */}

        
  </View>
  
  <View className=" w-full mt-10 h-auto">
 

    
        <Text className="text-2xl font-light text-[#20463C]">
        Popular destination
        </Text>
      
</View>


  </View>
<PopularDestination />
<PopularDestination />
<PopularDestination />
<PopularDestination />
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
