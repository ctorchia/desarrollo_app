import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const ListsItem = ({ item, onDelete, onSelect,colorBack }) => {
    return (
        <TouchableOpacity onPress={() => onSelect(item)}>
            <View style={[styles.productItem, { backgroundColor: COLORS.category03 }]}>
                <View style={styles.details}>
                    <View>
                        <Text style={styles.date}>{formatDay(item.date)}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <Ionicons name="trash" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListsItem

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