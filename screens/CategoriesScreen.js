import React from "react";
import { View, Text } from "react-native";
import CategoryItem from "../components/category-item";
import { FlatGrid } from "react-native-super-grid";

export default function CategoriesScreen() {
  const items = [
    { category: "Sports", icon: "🏈" },
    { category: "Politics", icon: "⚖️" },
    { category: "Life", icon: "🌞" },
    { category: "Gaming", icon: "🎮" },
    { category: "Animals", icon: "🐻" },
    { category: "Nature", icon: "🌴" },
    { category: "Food", icon: "🍔" },
    { category: "Art", icon: "🎨" },
    { category: "History", icon: "📜" },
    { category: "Fashion", icon: "👗" },
    { category: "Covid-19", icon: "😷" },
    { category: "Middle East", icon: "⚔️" },
  ];
  return (
    <View className="px-4 h-full bg-white">
      <View className="pt-20">
        <Text className="text-2xl font-semibold">Categories</Text>
        <Text className="text-lg text-[#7C82A1]">
          Thousands of articles in each category
        </Text>
      </View>
      {/* Categories */}

      <FlatGrid
        className="pt-10"
        itemDimension={130}
        data={items}
        renderItem={({ item }) => (
          <CategoryItem icon={item.icon} category={item.category} />
        )}
      />
    </View>
  );
}
