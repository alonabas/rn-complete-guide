import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';


export const NumberContainer = ({style={}, children=''}) => {
    return (
        <View style={{...styles.container, ...style}}>
            <Text style={styles.number}>
                {children}
            </Text>
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