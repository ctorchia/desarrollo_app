import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductDetailScreen = ({ route, navigation}) => {

  const { product } = route.params


  useEffect(() => {
    navigation.setOptions({
      title: product.name
    })
  },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>{product.weight}</Text>
      <Text>{product.description}</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    }
})