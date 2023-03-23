import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Lista de productos a comprar</Text>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})