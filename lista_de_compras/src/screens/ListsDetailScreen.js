import { FlatList, StyleSheet, View } from 'react-native'

import { COLORS } from '../constants/colors'
import ListsDetail from '../components/ListsDetail'
import { useSelector } from 'react-redux'

const ListsDetailScreen = ({ route, navigation }) => {

    const categories = useSelector(state => state.categories.categories)

    const list = useSelector(state => state.lists.selected)

    const renderListsItem = ({ item }) => {
        const colorBack = categories.find(category => category.id === item.category).color
        return <ListsDetail item={item} colorBack={colorBack} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={list.items}
                keyExtractor={(item) => item.id}
                renderItem={renderListsItem}
            />
        </View>
    )
}

export default ListsDetailScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: COLORS.white,
      paddingBottom: 120,
    }
  })