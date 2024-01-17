import { View, Text, Pressable, Button } from "react-native";
import LoadingSpinner from "../icons/LoadingSpinner";
import { Svg, Circle,Path } from "react-native-svg";
import { ActivityIndicator } from "react-native-paper";
export default function ContinueWithEmail({title, loading, }) {
  return ( 
 
    <View className={`flex items-center justify-center rounded-xl bg-secondary  flex-row  p-3`}>
    <Text className=" mx-5 animate-spin text-primary text-center font-bold text-lg">{title}</Text>
    { loading &&  <ActivityIndicator size={"small"}  color="#fff"/>}

    </View>
   
  
  );
}
