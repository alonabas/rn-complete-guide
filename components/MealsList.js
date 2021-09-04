
import React from "react";
import {View, FlatList, StyleSheet, } from "react-native";
import {MealItem} from './MealItem';

export const MealsList = ({navigation, displayMeals}) => {
    return (
        <View style={styles.list}>
            <FlatList data={displayMeals} style={{flex: 1}} keyExtractor={(e) => e.id} renderItem={(data) => (
                    <MealItem data={data} onPress={(el) => navigation.navigate({
                        routeName: 'MealDetail',
                        params: {id: el.id, title: el.title, element: el}
                    })}/>
                )}/>

        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flex: 1,
        alignItems:'center'
    }
});
