import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FONTS } from '../constants/fonts';
import React from 'react'

const ProductItem = ({ item, onSelected, color }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={[styles.productItem, { backgroundColor: color }]}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({

    productItem: {
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 20,
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 20,
        fontFamily: FONTS.main,
        marginBottom: 6
    },
    details: {
        fontSize: 10
    },
    description: {
        fontSize: 16,
    }
})