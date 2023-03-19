import { CATEGORIES } from '../data/categories'
import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'
import React from 'react'

const CategoriesScreen = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            categoryName: item.title,
            categoryColor: item.color
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen
