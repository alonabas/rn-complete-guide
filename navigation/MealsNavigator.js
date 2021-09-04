import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import {COLORS} from '../constants/colors';
import { Platform } from "react-native";
import FavoritesScreen from "../screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FiltersScreen from "../screens/FiltersScreen";

const defaultNavigationOptions = {
    headerTitle: 'A screen',
    headerTitleStyle: {
        fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily:'open-sans'
    },
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : COLORS.primary
    },
    headerTintColor: Platform.OS === 'ios' ? COLORS.primary : 'white'
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailsScreen
    }
}, {
    navigationOptions: {
        tabBarColor: COLORS.primary,
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            )
        }
    },
    defaultNavigationOptions,
});

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    MealDetail: {
        screen: MealDetailsScreen
    }
}, {
    navigationOptions: {
        tabBarColor: COLORS.accent,
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            )
        }
    },
    defaultNavigationOptions
});

const TabScreens = {
    Meals: MealsNavigator,
    Favorites: FavNavigator,
}

//shifting true
// tabBarColor
// barStyle: {backgroundColor}
const MealsFavTabsNavigation = Platform.OS === 'ios' ? createBottomTabNavigator(TabScreens, 
    { tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: COLORS.accent
    }
}) : createMaterialBottomTabNavigator(TabScreens, {
    activeTintColor: COLORS.accent,
    shifting: true,
});

const FiltersNavigation = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        tabBarColor: COLORS.primary,
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            )
        }
    },
    defaultNavigationOptions
});

const MainNavigation = createDrawerNavigator({
    Meals: MealsFavTabsNavigation,
    Filters: FiltersNavigation,
}, 
{
    contentOptions: {
      activeTintColor: COLORS.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
 );

// shadow color, opacity 0.6 radius 10 elevation 3 offset 0,2, padding 15, bottom
// text bold 22, number of lines 2, text align
// version 21 android native feedback

// creaTE drawer navigator in favm filters and categories
//headerLeft icon in cat and favs - as we used before
// ios menu icon
// togleDrawer on press obj.navigation.toggle...

// drawerLabel in navigation options

// contentOptions on drawer, activeTintColor
export default createAppContainer(MainNavigation)