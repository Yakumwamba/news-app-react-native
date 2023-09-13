import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MailIcon from "../icons/mail-icon";
import LockIcon from "../icons/lock-icon";
import GoogleLogo from "../icons/google-icon";
import FacebookLogo from "../icons/facebook-icon";

export default function SignInScreen({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <ScrollView className="px-4 h-full bg-white">
      <View className="px-4 h-full flex-1 flex-col bg-white">
        <View className="pt-20">
          <Text className="text-2xl font-semibold">Welcome Back 👋</Text>
          <Text className="text-[16px] w-full pt-2 text-[#7C82A1]">
            I am happy to see you again. You can continue where you left off by
            logging in
          </Text>
        </View>

        <View className="flex-1 flex-col">
          {/* Email */}
          <View
            style={{
              borderColor: isFocused ? "#475AD7" : "",
              borderWidth: isFocused ? 1 : 0,
            }}
            className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 "
          >
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <MailIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={"#7C82A1"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
          </View>
          {/* Email */}

          {/* Password */}
          <View
            style={{
              borderColor: isFocused ? "#475AD7" : "",
              borderWidth: isFocused ? 1 : 0,
            }}
            className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 "
          >
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={isFocused ? "#475AD7" : "#7C82A1"} />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#7C82A1"}
                secureTextEntry={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-96 mx-2"
              ></TextInput>
            </View>
          </View>
          {/* Password */}

          {/* Change Password Link */}
          <Pressable
            className="mt-5"
            onPress={() => {
              navigation.navigate("ChangePass");
            }}
          >
            <Text className="text-[#7C82A1] self-end">Forgot Password</Text>
          </Pressable>
          {/* Change Password Link */}

          {/* SignUp button */}
          <Pressable
            onPress={() => {
              console.log("Signing In...");
            }}
            className="flex-1  mt-5   rounded-lg flex-row px-4  items-center justify-center bg-[#475AD7]  h-14 "
          >
            <Text className=" font-semibold text-[16px] text-white">
              Sign In
            </Text>
          </Pressable>
          {/* SignUp button  */}

          <View className="pt-12 items-center">
            <Text className="text-lg">or</Text>
          </View>

          {/* Socials  */}

          <View className="pt-12 items-center gap-2 flex-col">
            <View className="flex-1 border-2 py-4 px-2 border-[#F3F4F6] rounded-xl flex-row items-center w-full justify-between">
              <GoogleLogo />
              <Text className="text-[16px] text-center pr-24">
                Sign In with Google
              </Text>
            </View>
            <View className="flex-1 border-2 py-4 px-2 border-[#F3F4F6] rounded-xl flex-row items-center w-full justify-between">
              <FacebookLogo />
              <Text className="text-[16px] self-center pr-20 ">
                Sign In with Facebook
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text className="pt-16 font-semibold text-[#555A77] ">
                Don't have an account? Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
