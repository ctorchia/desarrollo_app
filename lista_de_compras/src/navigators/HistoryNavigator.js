import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts';
import ListsDetailScreen from '../screens/ListsDetailScreen'
import ListsScreen from '../screens/ListsScreen'
import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const HistoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="History"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
          fontFamily: FONTS.main
        }
      }}
    >
      <Stack.Screen
        name="History"
        component={ListsScreen}
        options={({ navigation }) => ({
          title: 'Historial de Compras',
        })}
      />
      <Stack.Screen
        name="ListsDetail"
        component={ListsDetailScreen}
        options={({ route }) => ({ title: "Detalle de Compra" })}
      />
    </Stack.Navigator>
  )
}

export default HistoryNavigator

