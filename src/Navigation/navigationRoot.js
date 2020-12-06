import React from 'react';

import Login from '../container/LoginContainer';
// import Register from "../container/RegisterContainer";
// import Otp from "../container/OtpContainer";
// import MapPage from "../container/MapContainer";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationService';

const Stack = createStackNavigator();

Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="MapScreen" component={MapPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
