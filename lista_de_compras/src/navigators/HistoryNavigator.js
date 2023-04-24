import { Platform, Text, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import ListsDetailScreen from '../screens/ListsDetailScreen'
import ListsScreen from '../screens/ListsScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import CategoriesScreen from '../screens/CategoriesScreen'
// import CategoryProductScreen from '../screens/CategoryProductScreen'

// import NewProductScreen from '../screens/NewProductScreen'
// import ProductDetailScreen from '../screens/ProductDetailScreen'



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
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="History"
        component={ListsScreen}
        options={({ navigation }) => ({
          title: 'Historial de Compras',
        //   headerRight: () => (
        //     <TouchableOpacity onPress={() => navigation.navigate('New')}>
        //       <Ionicons name="md-add" color={Platform.OS === 'android' ? 'white' : COLORS.DARK_SIENNA} size={23} />
        //     </TouchableOpacity>
        //   )
        })}
      />
      <Stack.Screen
        name="ListsDetail"
        component={ListsDetailScreen}
        options={({ route }) => ({ title: route.params.categoryName })}

      />

      
      {/* <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="New"
        component={NewProductScreen}
        options={{ title: 'Nuevo Producto' }}
      /> */}
    </Stack.Navigator>
  )
}

export default HistoryNavigator

