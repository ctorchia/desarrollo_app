import React, { useEffect } from 'react'
import { filterProducts, selectProduct } from '../store/actions/products.action'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import ProductItem from '../components/ProductItem'

const CategoryProductScreen = ({ route, navigation }) => {

  const dispatch = useDispatch()
  const categoryProducts = useSelector(state => state.products.filteredProducts)
  const category = useSelector(state => state.categories.selected)

  useEffect(() => {
    dispatch(filterProducts(category.id))
  }, []);

  const handleOnSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate('Detail', {
      // product: item
    })
  }

  const renderProductItem = ({ item }) => (<ProductItem item={item} onSelected={handleOnSelected} color={category.color}/>)

  return (
    <FlatList 
      data={categoryProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    />
  )
}

export default CategoryProductScreen
