import * as React from 'react';

import { COLORS } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import ListInCart from '../screens/ListInCart'
import ListScreen from '../screens/ListScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: COLORS.active,
        inactiveTintColor: COLORS.category01,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            return (
              <Ionicons
                name={focused ? 'ios-list-box' : 'ios-list'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="A COMPRAR" component={ListScreen} />
      <Tab.Screen name="EN CARRITO" component={ListInCart} />
    </Tab.Navigator>
  );
}
