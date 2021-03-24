import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native-elements';
import LoginScreen from '../screens/LoginScreen';
import firebase from 'firebase';
import db from 'config';

export default class DonateItems extends React.Component {
    render() {
        return(
            <View>
               <Text>Donate Items Screen</Text>
            </View>
        )
    }
}