import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const ListItem = ({ item, onDelete, colorBack }) => {
// onPress={() => onSelected(item)}
    return (
        <TouchableOpacity>
            <View style={[styles.productItem, { backgroundColor: colorBack }]}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.details}>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text>{item.quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <Ionicons name="trash" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    productItem: {
        // borderBottomColor: '#ccc',
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
        fontFamily: 'OpenSans_700Bold',
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
        fontSize: 16,
    }
})