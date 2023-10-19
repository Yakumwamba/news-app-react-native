import * as React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { SafeAreaProvider } from 'react-native-safe-area-context';
// State
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRoutes } from "./routes";
import { store } from "./store"
import { Provider as StoreProvider } from 'react-redux';
export default function App() {
  return (

    <StoreProvider store={store}>
    <SafeAreaProvider>
        <AppRoutes />
    </SafeAreaProvider>
  </StoreProvider>
 
  );
}
