import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useRef, useCallback, useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BusIconRoad from "../icons/bus-icon-road";


export default function CoachScreen() {
  // const handler = useBottomSheetGestureHandlers()
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["18%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    

  
      <View className="flex-1 flex-col pt-5 bg-[#f5f3f3] h-full">
        <View className="px-4 flex flex-row">
          <View className="flex flex-row items-center  mt-5 mb-2 h-28 justify-between w-full bg-IntercityBrightPink rounded-xl">
            <Text className="text-[#FFF] font-bold text-xl text-left w-2/3  p-2">
              Tell us where you want to go by coach
            </Text>
            <BusIconRoad/>
          </View>
       
        </View>
      
        <View className="px-4">
          <TextInput
            placeholder="Pickup location?"
            placeholderTextColor={"#20463C"}
            className="flex-3 mb-2 placeholder:font-bold placeholder:pl-2 rounded-xl w-full h-16 bg-secondary"
          ></TextInput>
          <TextInput
            placeholder="Where are you going?"
            placeholderTextColor={"#20463C"}
            className="flex-3 placeholder:font-bold placeholder:pl-2 rounded-xl w-full h-16 bg-secondary"
          ></TextInput>
          <View className="bg-secondary drop-shadow-xl shadow-secondary mt-5  mb-8 w-full h-[3px]"></View>
        </View>
     
        <View className="flex-1 pb-20 rounded-t-[30px] drop-shadow-xl shadow-primary  w-full ">

          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <View>
                <Text>Swip up to see more</Text>
              </View>
              <View className="h-20 flex flex-row w-full items-center bg-secondary mt-3">
                <View className=" bg-accent w-1 h-full mr-10"></View>
                <View className="flex flex-col">
                  <Text className="text-lg font-bold">Kitwe, Copperbelt</Text>
                  <Text>Kitwe, Copperbelt</Text>
                </View>
              </View>
              <View className="h-20 flex flex-row w-full items-center ">
                <View className="t w-1 h-full mr-10"></View>
                <View className="flex flex-col">
                  <Text className="text-lg font-bold">Lusaka West, Lusaka</Text>
                  <Text>Kitwe, Copperbelt</Text>
                </View>
              </View>
              <View className="h-20 flex flex-row w-full items-center ">
                <View className="t w-1 h-full mr-10"></View>
                <View className="flex flex-col">
                  <Text className="text-lg font-bold">Lusaka West, Lusaka</Text>
                  <Text>Kitwe, Copperbelt</Text>
                </View>
              </View>
            </View>
          </BottomSheet>
        </View>
      </View>




      <HideWithKeyboard>
      <View className=" bg-[#fff] h-auto flex px-4 justify-center pt-5  border-t-2 border-secondary bg-[#fff]] flex-col w-full items-start ">
        <Text className=" font-bold pb-5 text-lg text-left">Payment</Text>
        <View className="bg-accent justify-center mb-5 items-center rounded-xl h-12 w-full">
          <Text className="text-[#fff] text-lg font-bold">
            {" "}
            Order coach now
          </Text>
        </View>
      </View>
      </HideWithKeyboard>
      
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    borderRadius: 10,
  },

  map: {
    borderRadius: "10px",
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
