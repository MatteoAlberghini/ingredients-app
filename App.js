/*
 * Main entry point of app
 */
// SECTION Imports
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './src/navigators/HomeNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';

// SECTION Main functions
export default function App() {
  // ANCHOR Functions
  const getItems = async () => {
    try {
      const items = await AsyncStorage.getItem('items')
      if (items === null || items === undefined) {
        console.log(null)
      }
      console.log(JSON.parse(items))
    } catch (e) {
      console.log(e)
      console.log(null)
    }
  }
  React.useEffect(() => {
    getItems()
  }, [])

  // ANCHOR Return statement
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}
