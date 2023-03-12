import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Pantalla de Productos</Text>
      <Button title="Ir a Detalle" onPress={() => {
        navigation.navigate('Detalle')
        }} />
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})