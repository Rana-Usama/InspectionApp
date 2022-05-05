import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import CreateNewInspectionScreen from './app/screens/CreateNewInspectionScreen';
import AddSnagScreen from './app/screens/AddSnagScreen';
import TakePhotoScreen from './app/screens/TakePhotoScreen';
import RepairScreen from './app/screens/RepairScreen';
import MoveOutInspectionScreen from './app/screens/MoveOutInspectionScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="MoveOutInspectionScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateNewInspectionScreen" component={CreateNewInspectionScreen} />
        <Stack.Screen name="AddSnagScreen" component={AddSnagScreen} />
        <Stack.Screen name="TakePhotoScreen" component={TakePhotoScreen} />
        <Stack.Screen name="RepairScreen" component={RepairScreen} />
        <Stack.Screen name="MoveOutInspectionScreen" component={MoveOutInspectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


