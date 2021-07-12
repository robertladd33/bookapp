import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Card } from 'react-native-elements';

function AboutMe() {

    return (
        <View>
            <Card title="About Me">
                <Text>
                    Hello, my name is Robert.  And this is My Favorite Books app. Blah blah blah. 
                </Text>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 50,
    },
});

export default AboutMe; 