/*
 * Home screen
 */
// SECTION Imports
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApplicationContext from '../contexts/ApplicationContext'

// SECTION Main functions
export default function Home() {
  // ANCHOR Constants
  // Context
  const applicationContext = React.useContext(ApplicationContext)
  const [screenItems, setScreenItems] = React.useState([])

  // ANCHOR Use effect
  React.useEffect(() => {
    setScreenItems(applicationContext.items)
  }, [applicationContext.items])

  // ANCHOR Functions
  const addItem = async () => {
    const newObj = {
      name: 'hello',
    }
    setScreenItems([...screenItems, newObj])
    await applicationContext.saveItems([...screenItems, newObj], (e) => {
      console.log(e)
    })
  }

  // ANCHOR Return statement
  return (
    <SafeAreaView>
      <View style={{ height: '100%', width: '100%', justifyContent: 'center', backgroundColor: '#f0f' }}>
        <StatusBar style="light" />
        <View>
          <Button title="add more" onPress={addItem} />
          <FlatList
            data={screenItems}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 1,
                  width: '100%',
                }}
              >
                <Text>{item.name}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              paddingTop: 8,
              paddingBottom: 20,
              marginStart: 8,
              marginEnd: 8,
            }}
            scrollEnabled={true}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
