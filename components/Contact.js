import React from 'react';
import { View, StyleSheet, Card } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    constructor(props) {
        super(props);
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['robladd@fakemail.co'],
            subject: 'My Fav Books',
            body: 'Hello!:'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <Button
                        title="Send Email"
                        buttonStyle={{ backgroundColor: 'blue', margin: 20 }}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color="#fff"
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => this.sendMail()}
                    />
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Contact;