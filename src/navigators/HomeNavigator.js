/*
 * Home Navigator handler
 */
// SECTION Imports
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Query from '../screens/Query'

// SECTION File variables
const Tabs = createBottomTabNavigator()

// SECTION Main class
export default function HomeNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="query" component={Query} />
    </Tabs.Navigator>
  )
}
