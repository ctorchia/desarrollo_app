import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Pantalla de categorias</Text>
            <Button title="Ir a Productos" onPress={() => { 
                navigation.navigate('Productos') 
                }} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})