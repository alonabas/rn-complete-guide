import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import colors from '../constants/colors';
import { TitleText } from './TitleText';

export const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{title}</TitleText>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 36,
        paddingTop: 60,
        backgroundColor: Platform.OS === 'ios' ? colors.primary : 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
});