import React from "react";
import {Text, StyleSheet} from 'react-native'

export const DefaultText = ({children, style, ...otherProps}) => {
    return (
        <Text style={{...style, ...styles.text}} {...otherProps}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});