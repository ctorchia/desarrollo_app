import { Button, Image, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FONTS } from '../constants/fonts';
import { addItem } from '../store/actions/list.action'

const ProductDetailScreen = ({ navigation }) => {

  const product = useSelector(state => state.products.selected)
  const list = useSelector(state => state.list.itemsInCart)

  const dispatch = useDispatch()

  // IF THE PRODUCT IS NOT IN THE CART, ADD IT 
  const onHandleAddToList = () => {
    if (list.find(item => item.id === product.id)) {
      ToastAndroid.show('El Producto ya esta en el carrito', ToastAndroid.SHORT)
    } else {
      ToastAndroid.show('Producto agregado correctamente', ToastAndroid.SHORT)
      dispatch(addItem({ ...product, quantity: 1 }))
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: product.name
    })
  }, [])

  return (
    <View style={styles.screen}>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title='Agregar a Lista' onPress={() => {
        onHandleAddToList()
      }} />
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.main,
    marginTop: 10,
    marginBottom: 10
  },
  description: {
    marginBottom: 10
  }
})