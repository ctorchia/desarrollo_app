import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem } from '../store/actions/list.action'

const ProductDetailScreen = ({ navigation }) => {

  const product = useSelector(state => state.products.selected)
  const dispatch = useDispatch()
  const onHandleAddToList = () => {
    dispatch(addItem({...product, quantity: 1}))
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
    fontFamily: 'OpenSans_700Bold',
    marginTop: 10,
    marginBottom: 10
  },
  description: {
    marginBottom: 10
  }
})