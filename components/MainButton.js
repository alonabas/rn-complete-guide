import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/colors';


export const MainButton = ({style={}, onPress=()=>{}, children, ...otherProps}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={{...styles.button, ...style}} {...otherProps}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25

    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});