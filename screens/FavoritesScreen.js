import React from 'react';
import {MealsList} from '../components/MealsList';
import { useSelector } from 'react-redux';
import { DefaultText } from '../components/DefaultText';
import {StyleSheet, View} from 'react-native';

const FavoritesScreen = (props) => {
    const meals = useSelector(state => state.meals.favoriteMeals);
    if (!meals?.length) {
        return (
            <View style={styles.fallbackView}>
                <DefaultText>You don't have favorite meals. Start adding some</DefaultText>
            </View>
        )
    }
    return (
        <MealsList displayMeals={meals} navigation={props.navigation} />
   )
}

FavoritesScreen.navigationOptions =  ({navigation}) => ({
    headerTitle: 'Favorites',
});

const styles = StyleSheet.create({
    fallbackView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FavoritesScreen;