import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
import { BodyText } from './BodyText';


export const NumberContainer = ({style={}, children=''}) => {
    return (
        <View style={{...styles.container, ...style}}>
            <BodyText style={styles.number}>
                {children}
            </BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       borderWidth: 2,
       borderColor: colors.accent,
       padding: 10,
       borderRadius: 10,
       margin: 10,
       alignItems: 'center',
       justifyContent: 'center'
    },
    number: {
        color: colors.accent,
    }
});