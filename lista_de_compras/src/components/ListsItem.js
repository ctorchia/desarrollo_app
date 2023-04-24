import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import colors from '../constants/colors';

const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const ListsItem = ({ item, onDelete, colorBack }) => {
    // onPress={() => onSelected(item)}
    return (
        <TouchableOpacity>
            <View style={[styles.productItem, { backgroundColor: "#EDDEA4" }]}>
                {/* <Image style={styles.image} source={{ uri: item.image }} /> */}
                <View style={styles.details}>
                    <View>
                        {/* <Text style={styles.title}>{item.name}</Text> */}
                        <Text style={styles.date}>{formatDay(item.date)}</Text>
                        {/* <Text style={styles.description}>{item.description}</Text> */}
                        {/* <Text>{item.quantity}</Text> */}
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <Ionicons name="trash" size={24} />

                        {/* <MaterialCommunityIcons name="cart-arrow-up" size={24} color="black" /> */}
                            {/* <Ionicons name="trash" size={24} /> */}
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




// const ListsItem = ({item,onDelete}) => {
//   return (
//     <View style={styles.order}>
//         <View>
//             <Text style={styles.date}>{formatDay(item.date)}</Text>
//         </View>
//         <View style={styles.actions}>
//             <TouchableOpacity onPress={()=> onDelete(item.id)}>
//                 <Ionicons name="md-trash" size={22}  />
//             </TouchableOpacity>
//         </View>
//     </View>
//   )
// }

// export default ListsItem

// const styles = StyleSheet.create({
//     order:{
//         flexDirection:'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 5,
//         margin:5,
//         borderColor:"#ccc",
//         borderWidth:1,
//         borderRadius:6,
//     },
//     date: {
//         fontSize:18,
//     },
//     total: {
//         fontSize:18,
//         fontFamily: 'OpenSans_700Bold'
//     }
// })