import {
    View,
    Text,
    ScrollView,
    TextInput,
    ImageBackground,
    StyleSheet,
    Pressable,
    Image
  } from "react-native";

// import BusLogo from "../icons/bus-logo";
// import logo from '../static/logo.png'
  export default function SplashScreen({ navigation }) {
    return (
<View classname="flex items-center bg-accent h-full w-full" >
   {/* <Image  source={logo} height={100} width={100} alt="" /> */}
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
  