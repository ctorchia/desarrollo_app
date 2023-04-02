import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const ProductItem = ({ item, onSelected, color}) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={[styles.productItem, { backgroundColor: color}]}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details} > $ {item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({

    productItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    },
    details: {
        fontSize: 10
    }
})