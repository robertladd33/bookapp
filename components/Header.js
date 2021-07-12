import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./images/logo.png')} />
            <Image style={styles.menu} source={require('./images/menu.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10, 
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        bottom: 10,
    },
    menu: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        top: 25,
    },
});

export default Header; 
