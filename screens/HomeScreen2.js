import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
  
} from "react-native";
import { useEffect } from "react";
import SearchIcon from "../icons/search-icon";
import MicrophoneIcon from "../icons/phonenumberIcon";
import image4 from "../static/image4.png";
import image3 from "../static/image3.png";
import MapView from "react-native-maps";
import SliderItem2 from "../components/slider-item2";
import BusIcon from "../icons/bus-icon";
import CarLogo from "../icons/car-icon";
import HomeIcon from "../icons/home-icon";
import WorkIcon from "../icons/work-icon";
import { loginUser } from "../store/reducers/authReducer";

export default function HomeScreen2({ navigation }) {




  return (
    <View className="px-4 h-full flex flex-col bg-[#fff]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 pt-10 my-4 items-center justify-between flex-row ">
          <View className=" h-auto w-auto">
            <Text className="text-2xl font-semibold ">
              Welcome back
            </Text>
            <Text>Patrick Chola</Text>
          </View>
          <View className="flex bg-secondary rounded-xl p-14 w-30 h-30  "></View>
        </View>
        <View className="flex-1  my-3 items-center gap-4 justify-between flex-row ">
          <Pressable
            onPress={() => {
              navigation.navigate("CoachScreen");
            }}
            className="flex-1 bg-IntercityPrimary rounded-xl p-14 w-30 h-30  "
          >
            <BusIcon />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("CabScreen");
            }}
            className="flex-1 bg-IntercityBrightPink  rounded-xl p-14 w-30 h-30  "
          >
            <View className="flex scale-125">
              <CarLogo />
            </View>
          </Pressable>
        </View>

        {/* Where are you going */}

        <TextInput
          placeholder="Where are you going?"
          placeholderTextColor={"#20463C"}
          className="flex-1 mb-4 placeholder:font-bold placeholder:pl-2 rounded-xl w-full h-16 bg-secondary"
        ></TextInput>
        <View className="flex-1 mb-2 gap-4 bg-[#fff] w-full h-auto py-5">
          <View className="flex  flex-row items-center justify-start ">
            <HomeIcon />
            <View className="flex px-4 flex-col">
              <Text className="text-[16px] font-bold">Home</Text>
              <Text className="text-[12px]">Set your home address</Text>
            </View>
          </View>

          {/* Set work address */}
          <View className="flex  flex-row items-center justify-start ">
            <WorkIcon />
            <View className="flex px-4 flex-col">
              <Text className="text-[16px] font-bold">Work</Text>
              <Text className="text-[12px]">Set your work address</Text>
            </View>
          </View>

          {/* Set your town */}
          <View className="flex  flex-row items-center justify-start ">
            <HomeIcon />
            <View className="flex px-4 flex-col">
              <Text className="text-[16px] font-bold">Home</Text>
              <Text className="text-[12px]">Set your home address</Text>
            </View>
          </View>
        </View>

        {/* Where are you going  */}
        <View
          style={{
            flex: 1,
            zIndex: 10,
            borderColor: "IntercityBrightPink",
            backgroundColor: "#fff",
            marginBottom: 10,
            borderRadius: 10,
            overflow: "hidden",
            width: "100%",
            height: 224,
          }}
        >
          <MapView
            initialRegion={{
              latitude: -15.38731075785871,
              longitude: 28.3231361976581,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            mapType="terrain"
            maxZoomLevel={30}
            
            logoEnabled={false}
            style={{ flex: 1 }}
          />
        </View>
      </ScrollView>

      <View className="fixed bottom-0 right-0 flex bg-[#F52D56] mb-4 flex-row justify-between px-4 items-center rounded-xl  h-[91px] w-full ">
        <View className="flex flex-col">
          <Text className="flex w-auto text-[#fff] justify-start text-[9.17px] font-semibold">
            TRAVEL TO 100s OF
          </Text>
          <Text className="flex w-[170px] text-[#fff] justify-start text-[16px] font-semibold">
            SOUTHERN AFRICAN DESTINATIONS
          </Text>
        </View>
        <View className=" w-auto h-auto flex items-center  justify-center rounded-3xl p-2 bg-IntercityPrimary">
          <Text className="text-[#fff] px-2 text-[10.77px] font-bold">
            Book now
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    borderRadius: 10,
  },
});
