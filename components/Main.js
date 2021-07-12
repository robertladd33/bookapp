import React, { Components } from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import books from '../shared/books';
import BookItem from './BookItem';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



// const AppNavigator = createStackNavigator({
//     AboutMe: {
//         screen: AboutMe, 
//     }
// })

const Main = (props) => {

    return (
        <View style={styles.container}>

            <FlatList 
                data={books}
                renderItem={({item}) => <BookItem book={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default Main; 