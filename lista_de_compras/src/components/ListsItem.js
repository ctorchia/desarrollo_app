import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import colors from '../constants/colors';

const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const ListsItem = ({item,onDelete}) => {
  return (
    <View style={styles.order}>
        <View>
            <Text style={styles.date}>{formatDay(item.date)}</Text>
        </View>
        <View style={styles.actions}>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Ionicons name="md-trash" size={22}  />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ListsItem

const styles = StyleSheet.create({
    order:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        margin:5,
        borderColor:"#ccc",
        borderWidth:1,
        borderRadius:6,
    },
    date: {
        fontSize:18,
    },
    total: {
        fontSize:18,
        fontFamily: 'OpenSans_700Bold'
    }
})