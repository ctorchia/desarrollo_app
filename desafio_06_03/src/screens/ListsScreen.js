import { FlatList, StyleSheet, Text, View } from 'react-native'
import { deleteLists, getLists } from '../store/actions/lists.action'
import { useDispatch, useSelector } from 'react-redux'

import ListsItem from '../components/ListsItem'
import React from 'react'

const ListsScreen = () => {

  const dispatch = useDispatch()
  const lists = useSelector(state=>state.lists.list)

  React.useEffect(()=>{
    dispatch(getLists())
  },[])

    const onHandleDeleteList = (id)=>{
        console.log('delete list')
        dispatch(deleteLists(id))
    }

    const renderListsItem = ({item}) =>(
        <ListsItem
            item={item}
            onDelete={onHandleDeleteList}
        />
    )

  return (
    <View style={styles.container}>
      <FlatList 
        data={lists}
        renderItem={renderListsItem}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default ListsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 36
  }
})