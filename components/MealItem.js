import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, ImageBackground, Platform } from "react-native";
import {DefaultText} from './DefaultText';

export const MealItem = ({data, onPress}) => {

    const {index, item} = data;
    const TouchableCmp = (Platform.OS === 'android' && Platform.Version >=21) ? TouchableNativeFeedback  : TouchableOpacity;

    return (
        <View style={styles.mealItemTop}>
            <TouchableCmp style={{flex: 1}} onPress={() => onPress(item)}>
                <View >
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: item.imageUrl}} style={styles.image}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <DefaultText style={styles.textDetails}>{item.duration}</DefaultText>
                        <DefaultText style={styles.textDetails}>{item.complexity}</DefaultText>
                        <DefaultText style={styles.textDetails}>{item.affordability}</DefaultText>
                    </View>
                </View >
            </TouchableCmp>
        </View>
    )

}

const styles = StyleSheet.create({
    mealItemTop: {
        flex: 1,
        height: 200,
        overflow:'hidden',
        
        marginVertical: 10,
        marginHorizontal: 10,

        borderRadius: 10
    },
    mealItem: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',        
        justifyContent: 'center'
    },
    mealRow: {
        flexDirection: "row",
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        height: '15%',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#e5e5e5'
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',        
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%'
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'open-sans-bold',
        textAlign: "center"
    },
    textDetails: {
        textTransform: 'uppercase'
    }

})