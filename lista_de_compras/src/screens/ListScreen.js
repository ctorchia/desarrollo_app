import { Button, FlatList, StyleSheet, View } from 'react-native'
import { clearList, moveToCart, removeItem } from '../store/actions/list.action'
import { useDispatch, useSelector } from 'react-redux'

import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts';
import ListItem from '../components/ListItem'
import React from 'react'

const ListScreen = () => {

  const categories = useSelector(state => state.categories.categories)

  const list = useSelector(state => state.list.items)
  list.sort((a, b) => a.category - b.category)
  const total = useSelector(state => state.list.total)

  const onHandleDeleteItem = (itemId) => {
    dispatch(removeItem(itemId))
  }

  const onHandleMoveToCart = (itemId) => {
    dispatch(moveToCart(itemId))
  }

  const dispatch = useDispatch()

  const onHandleClearList = () => {
    dispatch(clearList())
  }

  const renderListItem = ({ item }) => {
    const colorBack = categories.find(category => category.id === item.category).color
    return <ListItem item={item} onDelete={onHandleDeleteItem} moveToCart={onHandleMoveToCart} colorBack={colorBack} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <Button title='Nueva Lista de Compras' onPress={() => {
          onHandleClearList()
        }} />
      </View>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.white,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderTopColor: COLORS.inactive,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: COLORS.inactive,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.main,
    padding: 8,
  }
})