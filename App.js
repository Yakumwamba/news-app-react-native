import * as React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium} from '@expo-google-fonts/rubik'
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// State
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRoutes } from "./routes";
import { store } from "./store"
import { Provider as StoreProvider } from 'react-redux';
import SplashScreen from "./screens/SplashScreen";
export default function App() {

    const [isFontLoaded, setIsFontLoaded] = React.useState(false);

   React.useEffect(() => {
     async function loadFont() {
       await Font.loadAsync({
         'RubikBold': require('./static/fonts/Rubik/static/Rubik-Bold.ttf'),
       });
     
       setIsFontLoaded(true);
     }
     loadFont();
   }, []);

   if (!isFontLoaded) {
    console.log("Loading information herer")
     return <SplashScreen />;
   }
   return (

    <StoreProvider store={store}>
    <SafeAreaProvider>
     <AppRoutes />
    </SafeAreaProvider>
  </StoreProvider>
 
  );
}
