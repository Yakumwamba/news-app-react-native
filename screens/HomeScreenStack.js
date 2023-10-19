import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import HomeScreen2 from "./HomeScreen2";
import SplashScreen from "./SplashScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
    >
      <HomeStack.Screen name="HomeScreen1" component={HomeScreen} />
      <HomeStack.Screen name="HomeScreen2" component={HomeScreen2} />
      <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
    </HomeStack.Navigator>
  );
}
