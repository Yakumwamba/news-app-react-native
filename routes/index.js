
import { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar } from 'react-native';
import { getToken, USER_TOKEN } from '../appConfig/asyncStorage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileStackScreen from "../screens/ProfileStackScreen";
import HomeStackScreen from "../screens/HomeScreenStack";
import SplashScreen from "../screens/SplashScreen";
// Stacks
const Tab = createBottomTabNavigator();

// Icons
import HomeIcon from "../icons/home-icon";
import CategoriesIcon from "../icons/categories-icon";
import BookmarkIcon from "../icons/bookmark-icon";
import ProfileIcon from "../icons/profile-icon";


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
      <Fragment>
        
            <NavigationContainer>
            <Tab.Navigator
              initialRouteName="splash"
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
              <Tab.Screen name="Categories" component={SplashScreen} />
              <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
              <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
            </NavigationContainer>
      
        
      </Fragment>
    );
  };