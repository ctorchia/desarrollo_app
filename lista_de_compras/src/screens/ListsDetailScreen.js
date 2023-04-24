import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import ListsDetail from '../components/ListsDetail'
import ProductItem from '../components/ProductItem'

// import { filterProducts, selectProduct } from '../store/actions/products.action'





const ListsDetailScreen = ({ route, navigation }) => {

  const dispatch = useDispatch()
//   const categoryProducts = useSelector(state => state.products.filteredProducts)
  const list = useSelector(state => state.lists.selected)

//   useEffect(() => {
//     dispatch(filterProducts(category.id))
//   }, []);

  const handleOnSelected = (item) => {
    // dispatch(selectProduct(item.id))
    // navigation.navigate('Detail', {})
  }

  const renderListsItem = ({ item }) => (<ListsDetail item={item} onSelected={handleOnSelected}/>)

  return (
    <FlatList 
      data={list.items}
      keyExtractor={(item) => item.id}
      renderItem={renderListsItem}
    />
  )
}

export default ListsDetailScreen







// import React from 'react'
// import { Text } from 'react-native'

// const ListsDetailScreen = () => {
//   return (
//     <Text>ListsDetail</Text>
//   )
// }

// export default ListsDetailScreen
