import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default function Cart({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
});