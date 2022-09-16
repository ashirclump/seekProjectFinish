import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Register from './Screens/Register'
import Otp from './Screens/Otp'
// import Home from './Screens/Home'
// import HomeOneScroll from './Screens/HomeOneScroll'
import Salonforwomen from './Screens/Salonforwomen'
import Facialforglow from './Screens/Facialforglow'
// import Diamond  from './Screens/Diamond'
import Sumary  from './Sumrryslot/Sumary'
import SummaryFinal from './Sumrryslot/SummaryFinal'
import AddMoney from './Sumrryslot/AddMoney'
import Sucessfullbokkking from './Sumrryslot/Sucessfullbokking';
import Bookingdelayed from './Sumrryslot/Bookingdelayed';
import Payment from './Sumrryslot/Payment'
import SelectDate from './Sumrryslot/SelectDate';

import Tabs from './Screens/Components/Tabs'
import Register from './Screens/Register';
import SelectedServices from './Screens/SelectedServices'

// import  Super  from './Screens/Super';
import SelectTime from './Sumrryslot/SelectTime';
import Notification from './Sumrryslot/Notification';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName='SelectTime'
      >

      <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />

      <Stack.Screen options={{ headerShown: false }} name="SelectTime" component={SelectTime} />

      <Stack.Screen options={{ headerShown: false }} name="SelectDate" component={SelectDate} />

      <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />

      <Stack.Screen options={{ headerShown: false }} name="Bookingdelayed" component={Bookingdelayed} />

      <Stack.Screen options={{ headerShown: false }} name="Sucessfullbokkking" component={Sucessfullbokkking} />

      <Stack.Screen options={{ headerShown: false }} name="AddMoney" component={AddMoney} />

      <Stack.Screen options={{ headerShown: false }} name="SummaryFinal" component={SummaryFinal} />


      <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Tabs} />
      {/* <Stack.Screen options={{ headerShown: false }} name="HomeOneScroll" component={HomeOneScroll} /> */}
      <Stack.Screen options={{ headerShown: false }} name="Salonforwomen" component={Salonforwomen} />
      <Stack.Screen options={{ headerShown: false }} name="Facialforglow" component={Facialforglow} />
      <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
      <Stack.Screen options={{ headerShown: false }} name="Sumary" component={Sumary} />
      <Stack.Screen options={{ headerShown: false }} name="SelectedServices" component={SelectedServices} />
     
     </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;










