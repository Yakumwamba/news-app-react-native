import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import LockIcon from "../icons/lock-icon";
import ArrowLeft from "../icons/arrow-left";
export default function ChangePassword({ navigation }) {
  return (
    <ScrollView className="px-4 h-full bg-white">
      <View className="px-4 h-full flex-1 flex-col bg-white">
        <View className="pt-20 flex-1 w-full pr-16 items-center justify-between flex-row">
          <Pressable
            onPress={() => {
              navigation.pop();
            }}
          >
            <ArrowLeft />
          </Pressable>
          <Text className="text-2xl font-semibold">Change Password</Text>
        </View>

        <View className="flex-1 flex-col">
          {/* Current Password */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#7C82A1"}
                className="w-96 ml-12"
              ></TextInput>
            </View>
          </View>
          {/* Current Password */}
          {/* New Password */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={"#7C82A1"} />
              <TextInput
                placeholder="New Password"
                placeholderTextColor={"#7C82A1"}
                className="w-96 ml-12"
              ></TextInput>
            </View>
          </View>
          {/* New Password */}
          {/* Repeat New Password */}
          <View className="flex-1  mt-5  rounded-lg flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
            <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
              <LockIcon color={"#7C82A1"} />
              <TextInput
                placeholder="Repeat New Password"
                placeholderTextColor={"#7C82A1"}
                className="w-96 ml-12"
              ></TextInput>
            </View>
          </View>
          {/* Repeat New Password */}

          {/* Change Password Button*/}
          <Pressable
            onPress={() => {
              console.log("Changing Password ...");
            }}
            className="flex-1  mt-5   rounded-lg flex-row px-4  items-center justify-center bg-[#475AD7]  h-14 "
          >
            <Text className=" font-semibold text-[16px] text-white">
              Change Password
            </Text>
          </Pressable>
          {/* Repeat New Password  */}
        </View>
      </View>
    </ScrollView>
  );
}
