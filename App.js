import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import CreateNewInspectionScreen from './app/screens/CreateNewInspectionScreen';
import AddSnagScreen from './app/screens/AddSnagScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AddSnagScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateNewInspectionScreen" component={CreateNewInspectionScreen} />
        <Stack.Screen name="AddSnagScreen" component={AddSnagScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


