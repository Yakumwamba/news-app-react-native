import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

import SearchIcon from "../icons/search-icon";
import PhoneNumberIcon from "../icons/phonenumberIcon";
import UserCheckIcon from "../icons/user-check";


export default function VerifyScreen({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);
  return (
    <View className="flex-1 justify-center  bg-[#E3EAE8]">
      <View className="px-4 justify-center flex-col ">
        <Text className="text-start text-lg font-light">We sent an SMS with the verification code to your number. </Text>
  
        {/* <TextInput placeholder={"+260"} /> */}


    
        <View className="flex mt-5 mb-5 rounded-xl flex-row px-4  items-center justify-between bg-[#F3F4F6]  ">
     
      <View className="flex w-auto flex-row items-center h-12 justify-center ">
   
        <TextInput
          placeholder="Verification Code"
          placeholderTextColor={"#20463C"}
          className="w-auto mr-20 placeholder:text-lg placeholder:opacity-20"
          
        ></TextInput>
         </View>
        
    <UserCheckIcon  className="self-center flex pr-10" />
        </View>

        <Pressable >
        <PrimaryButton loading={true} title={"Verify"} />
        </Pressable>
        

      </View>
    </View>
  );
}
