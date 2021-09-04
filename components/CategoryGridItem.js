import React from "react"
import { TouchableOpacity, TouchableNativeFeedback, View, StyleSheet, Text, Platform } from "react-native"

export const CategoryGridItem = ({params, onPress}) => {
    const [{index, item}] = params;
    const TouchableCmp = (Platform.OS === 'android' && Platform.Version >=21) ? TouchableNativeFeedback  : TouchableOpacity;
    return (
        <View style={styles.categoryItemTop}>
            <TouchableCmp style={{flex: 1}} onPress={() => onPress(item)}>
                <View  style={{...styles.categoryItem, backgroundColor: item.color}} >
                    <Text numberOfLines={2} style={styles.text}>{item.title}</Text>
                </View >
            </TouchableCmp>
        </View>
        
    )
}

const styles = StyleSheet.create({
    categoryItemTop: {
        flex: 1,
        borderRadius: 10,
        overflow: (Platform.OS === 'android' && Platform.Version >=21) ? "hidden" : 'visible',
        elevation: 5,
        margin: 15,
    },
    categoryItem: {
        flex: 1,
        
        height: 150,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        
        shadowOffset: {height: 0, width: 1},
    },
    text: {
        textAlign: 'right',
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
});