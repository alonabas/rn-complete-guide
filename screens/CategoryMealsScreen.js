import React from 'react';
import { MEALS } from '../data/dummy-data';
import { MealsList } from '../components/MealsList';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('id', '');

    const displayMeals = MEALS.filter(e => e.categoryId.indexOf(categoryId) > -1);
    return (
        <MealsList displayMeals={displayMeals} navigation={props.navigation} />
   )
}


CategoryMealsScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: navigation.getParam('title', '')
    }
}

export default CategoryMealsScreen;