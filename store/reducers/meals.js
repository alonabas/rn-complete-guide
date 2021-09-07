import { MEALS } from "../../data/dummy-data";
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';


const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const indexOfItem = state.favoriteMeals.findIndex(m => m.id === action.mealId);
            const item = state.meals.find(e => e.id === action.mealId);
            if (indexOfItem === -1) {
                return {...state, favoriteMeals: [...state.favoriteMeals, item]}
            }
            else {
                return {...state, favoriteMeals: state.favoriteMeals.filter(e => e.id !== action.mealId)}
            };

        case SET_FILTERS:
            const appliedFilters = Object.keys(action.filters).filter(e => action.filters[e]);
            const newFilteredMeals = state.meals.filter(e => appliedFilters.every(f => e[f]));
            return {...state, filteredMeals: newFilteredMeals}

        default:
            return state;
    }
}

export default mealsReducer;