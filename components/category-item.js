import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function CategoryItem({ icon, category }) {
  return (
    <View className="flex-1 items-center justify-center bg-[#F3F4F6] h-20 w-40 rounded-xl border-spacing-1">
      <View className="flex-1 justify-between items-center flex-row w-18">
        <Text>{icon}</Text>
        <Text className="text-[#666C8E] font-semibold text-[16px]">
          {" "}
          {category}
        </Text>
      </View>
    </View>
  );
}
