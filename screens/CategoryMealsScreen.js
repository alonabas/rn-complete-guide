import React from 'react';
import { MealsList } from '../components/MealsList';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { DefaultText } from '../components/DefaultText';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('id', '');
    const meals = useSelector(state => state.meals.filteredMeals);
    const displayMeals = meals.filter(e => e.categoryId.indexOf(categoryId) > -1);
    if (!displayMeals?.length) {
        return (
            <View style={styles.fallbackView}>
                <DefaultText>No data found. Maybe check your filters</DefaultText>
            </View>
        )
    }
    return (
        <MealsList displayMeals={displayMeals} navigation={props.navigation} />
   )
}


CategoryMealsScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: navigation.getParam('title', '')
    }
}

const styles = StyleSheet.create({
    fallbackView: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealsScreen;