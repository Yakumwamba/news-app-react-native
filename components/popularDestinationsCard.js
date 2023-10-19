import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function PopularDestination({ image, title, description }) {
  return (
    <View className="w-full my-2 h-auto bg-[#BFD7D0]">
    <View className="flex-1 flex-col p-5 h-auto w-full">
      <View className="flex-1 flex-row justify-between">
      <Text className=" font-bold  text-lg text-[#20463C]">
      Kabwe
        </Text>
        <Text className=" font-semibold  text-lg text-[#20463C]">
      K150.00
        </Text>
      </View>
 
      <View className="flex-1 flex-row justify-between">
      <Text className=" font-light text-lg text-[#20463C]">
      Distance
        </Text>
        <Text className=" font-light text-lg text-[#20463C]">
      Departure
        </Text>
        <Text className=" font-light text-lg text-[#20463C]">
      Seats
        </Text>
      
      </View>

      <View className="flex-1 flex-row justify-between">
      <Text className=" font-semibold text-lg text-[#20463C]">
      400km
        </Text>
        <Text className=" font-semibold  text-lg text-[#20463C]">
      07:00
        </Text>
        <Text className="font-semibold text-lg text-[#20463C]">
      34
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
    resizeMode: "cover",
    borderRadius: 10,
  },
});
