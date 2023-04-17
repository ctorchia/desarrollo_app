import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { confirmList, removeItem } from '../store/actions/list.action'
import { useDispatch, useSelector } from 'react-redux'

import ListItem from '../components/ListItem'
import React from 'react'

const ListScreen = () => {

  const categories = useSelector(state => state.categories.categories)
  console.log(categories)

  const list = useSelector(state => state.list.items)
  console.log(list)
  const total = useSelector(state => state.list.total)

  const onHandleDeleteItem = (itemId) => {
    console.log("Elimina item");
    dispatch(removeItem(itemId))
  }

  const dispatch = useDispatch()

  const onHandleConfirmList = () => {
    console.log("Confirma lista");
    dispatch(confirmList(list, total))
  }

  const renderListItem = ({ item }) => {
    const colorBack = categories.find(category => category.id === item.category).color
    return <ListItem item={item} onDelete={onHandleDeleteItem} colorBack={colorBack} />
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
        <Button title='Confirmar Lista' onPress={() => {
          onHandleConfirmList()
        }} />
        {/* <TouchableOpacity style={styles.confirm} onPress={onHandleConfirmList}>
          <Text>Confirmar Lista</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total de Productos: </Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#F5F5F5",
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
    fontFamily: 'OpenSans_700Bold',
    padding: 8,
  }
})