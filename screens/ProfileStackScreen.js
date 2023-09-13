import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./SignUpScreen";
import ChangePassword from "./ChangePassword";
import SignInScreen from "./SignInScreen";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="SignUp" component={SignUpScreen} />
      <ProfileStack.Screen name="SignIn" component={SignInScreen} />
      <ProfileStack.Screen name="ChangePass" component={ChangePassword} />
    </ProfileStack.Navigator>
  );
}
