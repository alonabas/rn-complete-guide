export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggeFavorite = (id) => ({
    type: TOGGLE_FAVORITE,
    mealId: id
});

export const setFilters = (filters) => ({
    type: SET_FILTERS,
    filters
});