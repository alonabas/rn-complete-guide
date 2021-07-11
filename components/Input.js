import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


export const Input = ({style={}, ...otherProps}) => {
    return (
        <TextInput style={{...styles.input, ...style}} {...otherProps}/>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1

    },
    inputContainer: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 5
    }
});