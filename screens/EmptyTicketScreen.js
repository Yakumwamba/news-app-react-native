import React from "react";
import {
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from 'expo-image';

const localImage = require('../static/LargeBusLogo.png');

export default function EmptyTicketScreen({ navigation, route }) {
  
  
  
  return (
    <View className="px-4 flex-1 flex-col  justify-center h-full  bg-[#E3EDEA]">
      <View className=" h-screen flex-1 flex-col justify-center items-center  ">
      
      <Image 
      source={localImage}
      style={{ width: 200, height: 70 }}
    />

       <Text className="font-bold text-3xl py-2">No tickets</Text>
       <Text className="w-auto mx-20 text-center py-2">Book your tickets on our platform and stand a chance to win free tickets and cool rewards</Text>
       
       <Pressable 
       onPress={()=>{
        navigation.navigate('Home')
       }}
       
       className="py-2">
       <View className=" flex h-auto p-2 w-auto bg-[#199675]">
            <Text className="text-center text-[#fff] text-lg"> Book your ticket now</Text>
          </View>
       </Pressable>
      
      </View>
    </View>
  );
}
