import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ListItem } from '../components/ListItem'
import React from 'react'
import { useSelector } from 'react-redux'

const ListScreen = () => {

  const list = useSelector(state => state.list.items)
  const total = useSelector(state => state.list.total)

  const onHandleDeleteItem=()=>console.log("Elimina item")

  const renderListItem = ({item})=>(
    <ListItem item={item} onDelete={onHandleDeleteItem} />
  )

  return (
    <View style={styles.container}>
      <Text>Lista de productos a comprar</Text>
      <View style={styles.list}>
        <FlatList 
          data={list}     
          renderItem={renderListItem} 
          keyExtractor={(item)=>item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
          <View style={styles.total}>
            <Text style={styles.text}>Total: </Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ListScreen

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:12,
    backgroundColor: '#fff',
    paddingBottom:120,
  },
  list: {
    flex:1, 
  },
  footer: {
    padding:12,
    borderTopColor: "#ccc",
    borderTopWidth:1,
  },
  confirm:{
    backgroundColor:"#F5F5F5",
    borderRadius:10,
    padding:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  total:{
    flexDirection: 'row',
  },
  text:{
    fontSize:18,
    fontFamily:'OpenSans_700Bold',
    padding:8,
  }
})