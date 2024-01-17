import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import HomeScreen2 from "./HomeScreen2";
import SplashScreen from "./SplashScreen";
import BookTicketScreen from "./BookTicketScreen";
import SearchResults from "./PaymentScreen";
import PaymentScreen from "./PaymentScreen";
import SignInScreen from "./SignInScreen";
import CoachScreen from "./CoachScreen";
import CabScreen from "./Cabscreen";


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
      <HomeStack.Screen name="BookTicketScreen" component={BookTicketScreen} />
      <HomeStack.Screen name="SignInScreen" component={SignInScreen} />
      <HomeStack.Screen name="CoachScreen" component={CoachScreen} />
      <HomeStack.Screen name="CabScreen" component={CabScreen} />
      <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
      <HomeStack.Screen name="SearchResults" component={SearchResults} />
      <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} />
    </HomeStack.Navigator>
  );
}
