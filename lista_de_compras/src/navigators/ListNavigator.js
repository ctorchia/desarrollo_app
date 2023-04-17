import * as React from 'react';

import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import ListScreen from '../screens/ListScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import { NavigationContainer } from '@react-navigation/native';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="A COMPRAR" component={ListScreen} />
      <Tab.Screen name="YA COMPRADOS" component={SettingsScreen} />
    </Tab.Navigator>
  );
}



























// import { Platform, StyleSheet, Text, View } from 'react-native'

// import { COLORS } from '../constants/colors'
// import ListScreen from '../screens/ListScreen'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const Stack = createNativeStackNavigator();

// const ListNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
//         },
//         headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
//         headerTitleStyle: {
//           fontFamily: 'OpenSans_700Bold'
//         }
//       }}
//     >
//       <Stack.Screen
//         name="Cart"
//         component={ListScreen}
//         options={{
//           title: 'Lista de compras'
//         }}
//       />
//     </Stack.Navigator>
//   )
// }

// export default ListNavigator

// const styles = StyleSheet.create({})