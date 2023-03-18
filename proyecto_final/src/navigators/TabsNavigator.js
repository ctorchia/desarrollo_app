import { StyleSheet, Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
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
              <Entypo name="shop" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Shop</Text>
            </View>
          )
        }}

      />
      <BottomTabs.Screen name="List-tab" component={ListNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="md-cart" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Cart</Text>
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
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
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