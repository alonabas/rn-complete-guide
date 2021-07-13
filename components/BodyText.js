

import React from 'react';
import { StyleSheet, Text } from 'react-native';


export const BodyText = ({children, style, ...otherProps}) => {
    return (
        <Text style={{...styles.text, ...style}} {...otherProps}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});
