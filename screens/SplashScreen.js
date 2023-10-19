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
  
  export default function SplashScreen({ navigation }) {
    return (
<View classname="flex-1  bg-[#72BBA8] h-screen w-full" >
     
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
  