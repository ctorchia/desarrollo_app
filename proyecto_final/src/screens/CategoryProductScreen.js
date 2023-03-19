import { FlatList } from 'react-native'
import { PRODUCTS } from '../data/products'
import ProductItem from '../components/ProductItem'
import React from 'react'

const CategoryProductScreen = ({ route, navigation }) => {

  const { categoryId } = route.params

  const products = PRODUCTS.filter(product => product.category === categoryId)

  const handleOnSelected = (item) => {
    navigation.navigate('Detail', {
      product: item
    })
  }

  const renderProductItem = ({ item }) => (<ProductItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    />
  )
}

export default CategoryProductScreen
