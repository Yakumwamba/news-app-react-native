import React, { useState } from "react";
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

import { useSelector } from "react-redux";
import { STATE_KEY } from "../store/reducers/locationReducer";
import BusLogo from "../icons/car-icon";
import CalendarIcon from "../icons/calendar-icon";
import ReferalIcon from "../icons/referral";
import FilterIcon from "../icons/filter-icon";

import BusListing from "../components/BusListing";
import ArrowTo from "../icons/arrow-to";
import image from "../static/buslogo.png"
import { ImageComponent } from "react-native";


export default function BookTicketScreen({ navigation, route}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { isLoading, busListings } = useSelector(state => state[STATE_KEY]);
  const [ticketCount, setTicketCount] = useState(1);
  // const { date } = route.params;
  
  return (
    <ScrollView className="h-full bg-[#E3EDEA]">
   <View className="flex-1 p-8 flex-col pt-20 justify-center bg-[#CBE5DE] items-center w-full h-auto">
<Image source={image} width={100} height={100} />
<View className="flex-1 pt-2 flex-row  items-center justify-center">
    <Text className="text-2xl font-medium mr-2">Lusaka</Text>
    <ArrowTo />
    <Text className="text-2xl font-medium ml-2">Kabwe</Text>
   </View>

   <View className="flex-1 pb-2   pt-2 items-center flex-row gap-2">
   <CalendarIcon />
    <Text className="text-sm">Ocotober 25</Text>
    <ReferalIcon />
    <Text>1 Passenger</Text>
   </View>

{/* Edit Search button */}

<View className="flex-1 bg-primary items-center justify-center rounded-md h-auto w-24">
  <Pressable onPress={() => {
    console.log("Clicking... ")
  }}
  android_ripple={"#E3EDEA"}
  >

    <Text className=" font-semibold text-[#fff] text-xm p-2 "> Edit Search</Text>
  </Pressable>
   </View>

 

   </View>

   {/* Search Results */}
   <View className="flex-1 pt-5 flex-col items-center justify-center w-full h-auto px-5">
        <View className="flex flex-row w-full h-auto justify-between ">
      <View className="flex flex-col">
        <Text className="text-lg font-normal">Select your trip</Text>
        <Text className="text-lg font-bold">3 Results</Text>
      </View>

      {/* Filter */}
      <View className="flex bg-[#CBE5DE] px-2 flex-row items-center justify-center rounded-md h-8 w-auto">
      <FilterIcon />

        <Pressable onPress={() => {
          console.log("Clicking... ")
        }}
        android_ripple={"#E3EDEA"}
        
        >
          
          <Text className=" font-semibold text-primary text-xm p-2 "> Earliest</Text>
        </Pressable>
      </View>
  </View>



        <View className=" flex flex-col w-full   ">
        {/* Bus Listing Card */}

          <BusListing busName={"Mazhandu"} />
          <BusListing busName={"Shalom"}/>
          <BusListing busName={"Peace Soldier"}/>
        
</View>


   </View>
    </ScrollView>
  );
}
