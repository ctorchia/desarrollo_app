import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { COLORS } from '../constants/colors'
import ImageSelector from '../components/ImageSelector'
import React from 'react'
import { addProduct } from '../store/actions/products.action'
import { useDispatch } from 'react-redux'

const NewProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = React.useState('')
    const [imageValue, setImageValue] = React.useState('')
    const [descriptionValue, setDescriptionValue] = React.useState('')

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

    const descriptionChangeHandler = text => {
        setDescriptionValue(text)
    }

    const saveProductHandler = () => {
        console.log(titleValue, imageValue, descriptionValue)
        dispatch(addProduct(titleValue,imageValue,descriptionValue))
        navigation.navigate('Home')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput style={styles.input} onChangeText={titleChangeHandler}/>
                <Text style={styles.label}>Descripcion</Text>
                <TextInput style={styles.input} onChangeText={descriptionChangeHandler}/>
                <ImageSelector onImage={image=>setImageValue(image)} />
                <Button title="Guardar" color={COLORS.MAROON} onPress={saveProductHandler} />
            </View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 14,
        marginBottom: 5
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewProductScreen