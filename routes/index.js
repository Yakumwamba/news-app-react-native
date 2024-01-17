
import { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar } from 'react-native';
import { getToken, USER_TOKEN } from '../appConfig/asyncStorage';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import  { createNativeStackNavigator } from  "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// Screens
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileStackScreen from "../screens/ProfileStackScreen";
import HomeStackScreen from "../screens/HomeScreenStack";
import TicketsScreen from '../screens/TicketsScreen';
// Stacks
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
// if (Platform.OS === 'android') {
//     StatusBar.setBackgroundColor(PRIMARY);
//   }


  export const AppRoutes = () => {
    // const { currentUser, initialLoading } = useSelector(authSelector);
    // const dispatch = useDispatch();
  
    // const retrieveToken = useCallback(async () => {
    //   const token = await getToken(USER_TOKEN);
  
    //   if (token) {
    //     dispatch(loginUserWithToken(token));
    //   } else {
    //     dispatch(requestCancelLoading());
    //   }
    // }, [dispatch]);
  
    // useEffect(() => {
    //   retrieveToken();
    // }, [retrieveToken]);
  
    return (
      <NavigationContainer 
    
      >
      <Stack.Navigator   
      
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
       initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeStackScreen} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
    );
  };