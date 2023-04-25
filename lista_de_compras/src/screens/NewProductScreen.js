import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { COLORS } from '../constants/colors'
import ImageSelector from '../components/ImageSelector'
import { Picker } from '@react-native-picker/picker';
import React from 'react'
import { addProduct } from '../store/actions/products.action'

const NewProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = React.useState('')
    const [imageValue, setImageValue] = React.useState('')
    const [descriptionValue, setDescriptionValue] = React.useState('')
    const [categoryValue, setCategoryValue] = React.useState('')

    const categories = useSelector(state => state.categories.categories)

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

    const descriptionChangeHandler = text => {
        setDescriptionValue(text)
    }

    const saveProductHandler = () => {
        dispatch(addProduct(titleValue, imageValue, descriptionValue, categoryValue))
        navigation.navigate('Home')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput style={styles.input} onChangeText={titleChangeHandler} />
                <Text style={styles.label}>Descripcion</Text>
                <TextInput style={styles.input} onChangeText={descriptionChangeHandler} />

                <Picker
                    selectedValue={categoryValue}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => setCategoryValue(itemValue)}
                >
                    <Picker.Item label="Selecciona una categoria" value="" />
                    {categories.map((category) => (
                        <Picker.Item key={category.id} label={category.title} value={category.id} />
                    ))}
                </Picker>

                <ImageSelector onImage={image => setImageValue(image)} />
                <Button title="Guardar" color={COLORS.category01} onPress={saveProductHandler} />
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
        borderBottomColor: COLORS.category01,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewProductScreen