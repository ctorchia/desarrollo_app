import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/colors'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import HistoryNavigator from './HistoryNavigator'
import ListNavigator from './ListNavigator'
import ProductNavigator from './ProductNavigator'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen name="Product-tab" component={ProductNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="shop" size={24} color={focused ? COLORS.active : COLORS.black} />
              <Text style={{ color: focused ? COLORS.active : COLORS.black }}>Productos</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen name="List-tab" component={ListNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Fontisto name="list-2" size={24} color={focused ? COLORS.active : COLORS.black} />
              <Text style={{ color: focused ? COLORS.active : COLORS.black }}>Lista</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen name="Lists-tab" component={HistoryNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Fontisto name="list-2" size={24} color={focused ? COLORS.active : COLORS.black} />
              <Text style={{ color: focused ? COLORS.active : COLORS.black }}>Historial</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: COLORS.active,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.10,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})