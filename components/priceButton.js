import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ArrowRight from '../icons/arrow-right'
import { useNavigation } from '@react-navigation/native';


export default function PriceButton() {
    const navigation = useNavigation();
  return (
    <View className=" bg-[#20463C]  rounded-2xl" >
      

        <View  className="flex flex-row items-center bg-[#38957C] p-2 rounded-2xl"> 
        <Text className="text-[#fff] font-medium">K200.00</Text>
        <ArrowRight color={'#BFD7D0'} />
        </View>
    
    </View>
  
  )
}
