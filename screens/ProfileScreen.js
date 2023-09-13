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
import profile from "../static/profile.png";
import SwitchToggle from "react-native-switch-toggle";
import ArrowRight from "../icons/arrow-right";
import SignOut from "../icons/signout";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView className="px-4 flex-1 flex-col h-full bg-white">
      <View className="pt-20">
        <Text className="text-2xl font-semibold">Profile</Text>
        <View className="flex-1 pt-8 items-center gap-6 flex-row">
          <ImageBackground
            source={profile}
            className="rounded-full pt-20 h-20 w-20"
          ></ImageBackground>

          <View className="flex1 flex-col ">
            <Text className="font-semibold text-[16px]">Klein Mulenga</Text>
            <Text className="font-normal text-[14px] text-[#7C82A1]">
              klein@gmail.com
            </Text>
          </View>
        </View>

        <View className="flex-1 flex-col pt-10 ">
          <View className="flex-1 mb-5 flex-row items-center pl-6 justify-between rounded-xl bg-[#F3F4F6] w-full h-14">
            <Text className=" text-[16px] text-[#666C8E] font-semibold">
              Notifications
            </Text>
            <SwitchToggle
              switchOn={isEnabled}
              onPress={() => toggleSwitch()}
              circleColorOff="#C4C4C4"
              circleColorOn="white"
              containerStyle={{
                width: 40,
                height: 24,
                borderRadius: 24,
                marginHorizontal: 10,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
                padding: 2,
              }}
              backgroundColorOn="#475AD7"
              backgroundColorOff="grey"
            />
          </View>

          <View className="flex-1 mb-5 flex-row items-center pl-6 justify-between pr-5 rounded-xl bg-[#F3F4F6] w-full h-14">
            <Text className=" text-[16px] text-[#666C8E] font-semibold">
              Language
            </Text>
            <ArrowRight />
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("ChangePass");
            }}
            className="flex-1 mb-10 flex-row items-center pl-6 justify-between pr-5 rounded-xl bg-[#F3F4F6] w-full h-14"
          >
            <Text className=" text-[16px] text-[#666C8E] font-semibold">
              Change Password
            </Text>
            <ArrowRight />
          </Pressable>

          <View className="flex-1 mb-5 flex-row items-center pl-6 justify-between pr-5 rounded-xl bg-[#F3F4F6] w-full h-14">
            <Text className=" text-[16px] text-[#666C8E] font-semibold">
              Privacy
            </Text>
            <ArrowRight />
          </View>

          <View className="flex-1 mb-10 flex-row items-center pl-6 justify-between pr-5 rounded-xl bg-[#F3F4F6] w-full h-14">
            <Text className=" text-[16px] text-[#666C8E] font-semibold">
              Terms & Conditions
            </Text>
            <ArrowRight />
          </View>
          {/* Signout */}
          <Pressable
            onPress={() => {
              console.log(navigation);
              navigation.navigate("SignUp");
            }}
          >
            <View className="flex-1 mb-5 flex-row items-center pl-6 justify-between pr-5 rounded-xl bg-[#F3F4F6] w-full h-14">
              <Text className=" text-[16px] text-[#666C8E] font-semibold">
                Sign Out
              </Text>
              <SignOut />
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
