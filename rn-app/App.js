import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import CardDetails from './Screens/CardDetails';
import Controllers from './Screens/Controllers';

const Stack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="Controllers" component={Controllers} />
      </Stack.Navigator>
    </NavigationContainer>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  
});
