import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import MyTabs from "../Commponet/Tabnavigation"
import Readscreen from '../Screen/Readscreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        
      }}
    >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Readscreen" component={Readscreen} />
      </Stack.Navigator>
  )
}

export default MyStack

const styles = StyleSheet.create({})