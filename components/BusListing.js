import { View, Text, Pressable } from 'react-native'
import React from 'react'

import ArrowTo from "../icons/arrow-to";
import BusIcon from "../icons/bus-icon";
import WifiIcon from "../icons/wifi-icon";
import ToiletIcon from "../icons/ticket-icon";
import TVIcon from "../icons/tv-icon";
import StarRating from "../components/starRating";
import ArrowRight from '../icons/arrow-right';
import PriceButton from './priceButton';
import { useNavigation } from '@react-navigation/native';

export default function BusListing({ busName}) {
  const navigation = useNavigation();
    
  return (


  
    <View className="flex w-full mt-2 mb-2  h-auto  border-2 border-opacity-20 border-primary drop-shadow-lg   rounded-xl">
    <Pressable onPress={() => {
      console.log("pressing....")
       navigation.navigate('PaymentScreen');
      }}
      android_ripple={{color: '#199675'}} 
      className=" bg-secondary w-full px-5 py-5  rounded-xl"
      >
      <View className="flex flex-row items-center  justify-between"> 
            <View className="flex flex-col">

            <Text className="text-2xl font-bold text-[#20463C]">{busName}</Text>
            <StarRating active={2} />
          
            </View>

            {/* amenities */}
            <View className="flex flex-row w-auto h-auto">
            <WifiIcon/>
            <ToiletIcon />
            <TVIcon/>
            </View>

            </View>

            <View className="flex text-[#20463C] flex-row items-center   justify-between"> 
            
            <View className="flex flex-row w-auto gap-8">
            <View className="flex flex-col">
              <Text className="text-xl font-bold text-[#20463C] ">7:00 am</Text>
              <Text className="text-sm font-semibold text-[#20463C] ">Lusaka</Text>
            </View>

          <View >
          <ArrowTo />
          </View>
          

            <View className="flex flex-col">
              <Text className="text-xl font-bold text-[#20463C] ">11:00 am</Text>
              <Text className="text-sm font-normal text-[#20463C] ">Kabwe</Text>
            </View>
            </View>

            
            </View>

            <View className="flex flex-row items-center  justify-between"> 
            <View className="flex flex-row items-center"> 
              <BusIcon/>
              <Text>4h30m</Text>
            </View>
            {/* Book button */}
            <View>
           <PriceButton />
            </View>
            </View>
          </Pressable>
        </View>
  )
}