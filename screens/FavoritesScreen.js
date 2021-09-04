import React from 'react';
import { MEALS } from '../data/dummy-data';
import {MealsList} from '../components/MealsList';

const FavoritesScreen = (props) => {
    const displayMeals = MEALS.filter(e => e.id === 'm1' || e.id === 'm2');
    return (
        <MealsList displayMeals={displayMeals} navigation={props.navigation} />
   )
}

FavoritesScreen.navigationOptions =  ({navigation}) => ({
    headerTitle: 'Favorites',
});


export default FavoritesScreen;