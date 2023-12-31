import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import ProfileIcon from "../icons/profile-icon";
import MailIcon from "../icons/mail-icon";
import LockIcon from "../icons/lock-icon";

export default function SignUpScreen({ navigation }) {
  return (
    <ScrollView className="px-4 h-full bg-white">
      <View className="px-4 h-full flex-1 flex-col bg-white">
        <View className="pt-20">
          <Text className="text-2xl font-semibold">Welcome to Nuntium 👋</Text>
          <Text className="text-[16px] w-full pt-2 text-[#7C82A1]">
            Hello, I guess you are new around here. You can start using the
            application after sign up.
          </Text>
        </View>

        <View className="flex-1 flex-col">
          {/* Username */}
          <View className="flex-1  mt-10  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <ProfileIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Username"
                placeholderTextColor={"#7C82A1"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
          </View>
          {/* Username */}

          {/* Email */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
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

          {/* Email */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#7C82A1"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
          </View>
          {/* Email */}
          {/* Email */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Repeat Password"
                placeholderTextColor={"#7C82A1"}
                className="w-96 mx-2"
              ></TextInput>
            </View>
          </View>
          {/* Email */}

          {/* SignUp button */}
          <Pressable
            onPress={() => {
              console.log("Signing up...");
            }}
            className="flex-1  mt-5   rounded-lg flex-row px-4  items-center justify-center bg-[#475AD7]  h-14 "
          >
            <Text className=" font-semibold text-[16px] text-white">
              Sign Up
            </Text>
          </Pressable>
          {/* SignUp button  */}

          <View className="pt-44 items-center">
            <Text
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              className=" font-semibold text-[#555A77]"
            >
              Already have an account? Sign In
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
