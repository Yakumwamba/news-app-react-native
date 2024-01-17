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
import MicrophoneIcon from "../icons/phonenumberIcon";
import image1 from "../static/image1.png";
import image2 from "../static/image3.png";
import bookmarkImage1 from "../static/bookmark1.png";
import bookmarkImage2 from "../static/bookmark2.png";
import Bookmark from "../components/bookmark";
import SliderItem from "../components/slider-item";
import PopularDestination from "../components/popularDestinationsCard";
import { useEffect } from "react";
import { getToken } from "../appConfig/asyncStorage";
import { loginUser } from "../store/reducers/authReducer";

export default function HomeScreen({ navigation }) {
  

  return (
  <View className="flex flex-col justify-end h-full items-end bg-[#F52D56]">
    <View className="px-6 pb-12 flex flex-col items-center h-44 w-full bg-IntercityPrimary">
      <Text className="flex self-start  text-2xl text-[#FFF] font-RubikBold py-6">Your journey starts here!</Text>
        
       
        <Pressable onPress={() => {
          navigation.navigate('SignInScreen')
        }} className="h-14 flex justify-center w-full rounded-xl bg-[#FFFFFF]">
           <Text className=" self-center text-2xl font-semibold">Continue</Text>
        </Pressable>
  

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
