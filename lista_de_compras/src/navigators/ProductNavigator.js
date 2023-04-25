import { Platform, Text, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryProductScreen from '../screens/CategoryProductScreen'
import { Ionicons } from '@expo/vector-icons'
import NewProductScreen from '../screens/NewProductScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
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
        name="Home"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          title: 'Categorias',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
              <Ionicons name="md-add" color={Platform.OS === 'android' ? 'white' : COLORS.DARK_SIENNA} size={23} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="Products"
        component={CategoryProductScreen}
        options={({ route }) => ({ title: route.params.categoryName })}

      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="New"
        component={NewProductScreen}
        options={{ title: 'Nuevo Producto' }}
      />
    </Stack.Navigator>
  )
}

export default ProductNavigator

