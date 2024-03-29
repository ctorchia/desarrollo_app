import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const ListItem = ({item,onDelete}) => {
  return (
    <View style={styles.item}>
        <View>
            <Text style={styles.header}>{item.name}</Text>
        </View>
        <View style={styles.detail}>
            <View>
                <Text>{item.description}</Text>
                <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={()=>onDelete(item.id)}>
                <Ionicons name="trash" size={24} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor: '#ccc'
    },
    header:{
        fontSize:18,
        fontFamily: 'OpenSans_700Bold',
    },
    detail:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize:16,
        fontFamily:'OpenSans_400Regular'
    }
})