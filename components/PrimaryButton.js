import { View, Text, Pressable, Button } from "react-native";
import LoadingSpinner from "../icons/LoadingSpinner";
import { Svg, Circle,Path } from "react-native-svg";
import { ActivityIndicator } from "react-native-paper";
export default function PrimaryButton({title, loading, }) {
  return ( 
 
    <View className={`flex items-center justify-center rounded-xl bg-IntercityPrimary  flex-row  p-3`}>
    <Text className=" mx-5 animate-spin text-[#fff] text-center text-lg">{title}</Text>
    { loading &&  <ActivityIndicator size={"small"}  color="#fff"/>}
    
    </View>
   
  
  );
}
