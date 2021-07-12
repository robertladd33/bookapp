import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


const BookItem = (props) => {

    const { title, author, summary, image, rating } = props.book;

    return (
        <View style={styles.container}>

            <View style={styles.bookContainer}>
                <Image source={image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>Written by: {author}</Text>
                <Text style={styles.rating}>Rating: {rating} out of 5</Text>
                <Text style={styles.summary}>{summary}</Text>
            </View>

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
    image: {
        justifyContent: 'center',
        width: 229,
        height: 346,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
    },
    author: {
        fontSize: 17,
        paddingTop: 8,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    rating: {
        fontSize: 16,
    },
    summary: {
        fontSize: 16,
        padding: 23,
    },
    bookContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    }
});

export default BookItem; 