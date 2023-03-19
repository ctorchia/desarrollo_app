import { COLORS } from '../constants/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryProductScreen from '../screens/CategoryProductScreen'
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
          options={{
            title: 'Mis Productos'
          }}
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
      </Stack.Navigator>
  )
}

export default ProductNavigator

