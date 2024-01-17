import { View } from "react-native";
import SearchIcon from "../icons/search-icon";
import MicrophoneIcon from "../icons/phonenumberIcon";


export default function TextInput({ placeholder}) {

  return (

      <View className="flex-1  mt-10  rounded-xl flex-row px-4  items-center justify-between bg-[#F3F4F6]  h-14 ">
      <View className="flex-1 w-auto flex-row items-center h-56 justify-between ">
       <SearchIcon/>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#20463C"}
          className="w-96 mx-2"
        ></TextInput>
      </View>
      <MicrophoneIcon className="self-center flex-1 pr-10" />
    </View>

  )
}
