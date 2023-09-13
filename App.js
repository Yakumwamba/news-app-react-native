import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "./icons/home-icon";
import CategoriesIcon from "./icons/categories-icon";
import BookmarkIcon from "./icons/bookmark-icon";
import ProfileIcon from "./icons/profile-icon";

// Screens
import CategoriesScreen from "./screens/CategoriesScreen";
import BookmarksScreen from "./screens/BookmarksScreen";

import ProfileStackScreen from "./screens/ProfileStackScreen";
import HomeStackScreen from "./screens/HomeScreenStack";
// Stacks
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#475AD7",
          tabBarInactiveTintColor: "#ACAFC3",

          title: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              return <HomeIcon color={color} />;
            } else if (route.name === "Categories") {
              return <CategoriesIcon color={color} />;
            } else if (route.name === "Bookmarks") {
              return <BookmarkIcon color={color} />;
            } else if (route.name === "Profile") {
              return <ProfileIcon color={color} />;
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "white",
              height: 96,
              borderTopEndRadius: 12,
              borderTopLeftRadius: 12,
            },
            null,
          ],
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
