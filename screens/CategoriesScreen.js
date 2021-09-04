import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import {CategoryGridItem} from '../components/CategoryGridItem';
import {COLORS} from '../constants/colors';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const CategoriesScreen = (props) => {
    return (
        <FlatList numColumns={2} 
                  data={CATEGORIES} 
                  keyExtractor={(d) => d.id} 
                  renderItem={(...params) => (
                    <CategoryGridItem params={params} 
                                      onPress={({id, title, color}) => props.navigation.navigate({
                                            routeName: 'CategoryMeals',
                                            params: {id, title, color}
                                      })}/>
                  )}/>        
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        flex: 1,
        alignItems:'center'
    }
});

CategoriesScreen.navigationOptions =  ({navigation}) => ({
    headerTitle: 'Categories',
    headerLeft: (props) => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={'ios-menu'} 
                  color={Platform.OS === 'android' ? 'white' : COLORS.primary}
                  onPress={() => navigation.toggleDrawer()} 
                  style={styles.favIcon}/>
        </HeaderButtons>
    ),
    

});

export default CategoriesScreen;



