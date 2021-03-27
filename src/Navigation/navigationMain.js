import React from 'react';
import NavMain from '../container/HomeContainer';
// import Register from "../container/RegisterContainer";
// import Otp from "../container/OtpContainer";
// import MapPage from "../container/MapContainer";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {homeNavigationRef} from './navigationService';

const Stack = createStackNavigator();

Navigator = () => {
  return (
    <NavigationContainer ref={homeNavigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen  name="Home" component={NavMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
