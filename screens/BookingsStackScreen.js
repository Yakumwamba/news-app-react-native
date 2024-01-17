import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookTicketScreen from "./BookTicketScreen";
import PaymentScreen from "./PaymentScreen";

const BookingsStack = createNativeStackNavigator();

export default function BookingsStackScreen() {
  return (
    <BookingsStackScreen.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
    >
      <BookingsStack.Screen name="BookTicket" component={BookTicketScreen} />
      <BookingsStack.Screen name="PaymentScreen" component={PaymentScreen} />
     
    </BookingsStackScreen.Navigator>
  );
}
