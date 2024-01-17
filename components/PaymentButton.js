import { View, Text, Pressable, Button } from "react-native";
import LoadingSpinner from "../icons/LoadingSpinner";
import { Svg, Circle,Path } from "react-native-svg";
import { ActivityIndicator } from "react-native-paper";
import ArrowTo from "../icons/arrow-to";
import ArrowRight from "../icons/arrow-right";
export default function PaymentButton({title, loading, active }) {
  return ( 
 
    <View className={`flex items-center h-auto   w-full flex-row  ${ !active ? "bg-primary" : " bg-greenFaint"}  p-5 rounded-lg`}>
    <Text className="flex  mx-5  text-[#fff] font-bold text-center text-2xl">{title}</Text>
    <ArrowRight color={"#FFF"}/>
    { loading &&  <ActivityIndicator size={"small"}  color="#fff"/>}

    </View>
   
  
  );
}
