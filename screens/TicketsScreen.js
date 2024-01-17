import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import referalLink from "../static/Ticket.png";
import SwitchToggle from "react-native-switch-toggle";
import ArrowRight from "../icons/arrow-right";
import SignOut from "../icons/signout";
import { useSelector } from "react-redux";
import { STATE_KEY } from "../store/reducers/locationReducer";
import EmptyTicketScreen from "./EmptyTicketScreen";
import Divider from "../components/Divider";


export default function TicketsScreen({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { isLoading, busListings } = useSelector(state => state[STATE_KEY]);
  const [ticketCount, setTicketCount] = useState(1);
  // const { date } = route.params;
  
  
  return (
    <ScrollView className="px-4 flex-1 flex-col h-full bg-[#E3EDEA]">
      <View className="pt-10">
        
       <View className="flex-1 pt-8 mx-5 items-center justify-between flex-row">
          
        <View className="flex1 flex-col w-56  gap-2">
            <Text className="font-semibold text-2xl text-[#20463C]">Your Tickets </Text>
            <Text className="font-normal text-sm text-[#20463C]">Find all your previous tickets, and check if you qualify for Reward Tickets</Text>

          </View>
          <ImageBackground
            source={referalLink}
            className="rounded-full pt-20 h-20 w-20"
          ></ImageBackground>

         
  </View> 
  <Divider/>
     {/* <EmptyTicketScreen navigation={navigation}/> */}
      </View>

     
    </ScrollView>
  );
}
