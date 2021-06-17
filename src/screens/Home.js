/*
 * Home screen
 */
// SECTION Imports
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// SECTION Main functions
export default function Home() {

  // ANCHOR Functions
  React.useEffect(() => {
    try {
      const test = [
        {
          item: 'ingrediente',
          date: '21 oct 2021',
        },
        {
          item: 'ingrediente3',
          date: '22 oct 2021',
        },
      ]
      const testString = JSON.stringify(test)
      AsyncStorage.setItem('items', testString)
    } catch (e) {
      console.log(e)
    }
  }, [])

  // ANCHOR Return statement
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#f0f' }}>
      
    </View>
  )
}