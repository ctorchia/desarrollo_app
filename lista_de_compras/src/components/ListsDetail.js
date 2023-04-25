import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FONTS } from '../constants/fonts';
import React from 'react'

const ListDetail = ({ item, colorBack }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.productItem, { backgroundColor: colorBack }]}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.details}>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text>Cantidad: {item.quantity}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListDetail

const styles = StyleSheet.create({
    productItem: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 55,
        height: 55,
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
        fontSize: 18,
        fontFamily: FONTS.main,
        marginBottom: 6
    },
    details: {
        fontSize: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    button: {
        marginLeft: 10,
    }
})