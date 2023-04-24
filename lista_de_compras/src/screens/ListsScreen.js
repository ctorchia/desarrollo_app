import { FlatList, StyleSheet, Text, View } from 'react-native'
import { deleteLists, getLists, selectList } from '../store/actions/lists.action'
import { useDispatch, useSelector } from 'react-redux'

import ListsItem from '../components/ListsItem'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const ListsScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists.list)

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getLists());
    }, [])
  );

  const onHandleDeleteList = (id) => {
    console.log('delete list')
    dispatch(deleteLists(id))
  }

  const onSelectListItem = (item) => {
    dispatch(selectList(item.id))
    navigation.navigate('ListsDetail', {})
    console.log("item", item)
}

  const renderListsItem = ({ item }) => (
    <ListsItem
      item={item}
      onDelete={onHandleDeleteList} 
      onSelect={onSelectListItem}
    />
  )

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title} >Historial de Compras</Text> */}
      <FlatList
        data={lists}
        renderItem={renderListsItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ListsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  }
})