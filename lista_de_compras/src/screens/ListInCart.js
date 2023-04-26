import { Button, FlatList, StyleSheet, View } from 'react-native'
import { confirmList, removeFromCart } from '../store/actions/list.action'
import { useDispatch, useSelector } from 'react-redux'

import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts';
import ListItemInCart from '../components/ListItemInCart'
import React from 'react'

const ListInCart = () => {

  const categories = useSelector(state => state.categories.categories)

  const list = useSelector(state => state.list.itemsInCart)
  list.sort((a, b) => a.category - b.category)

  const onHandleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const onHandleConfirmList = () => {
    dispatch(confirmList(list))
  }

  const dispatch = useDispatch()

  const renderListItem = ({ item }) => {
    const colorBack = categories.find(category => category.id === item.category).color
    return <ListItemInCart item={item} removeFromCart={onHandleRemoveFromCart} colorBack={colorBack} />
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
        <Button title='Guardar Compra en Historial' onPress={() => {
          onHandleConfirmList()
        }} />
      </View>
    </View>
  )
}

export default ListInCart

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