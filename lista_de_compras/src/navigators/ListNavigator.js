import { Platform, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/colors'
import ListScreen from '../screens/ListScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="Cart"
        component={ListScreen}
        options={{
          title: 'Lista de compras'
        }}
      />
    </Stack.Navigator>
  )
}

export default ListNavigator

const styles = StyleSheet.create({})