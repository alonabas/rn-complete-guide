import React from 'react';
import {StyleSheet, View, Switch, Text} from 'react-native';
import {COLORS} from '../constants/colors';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DefaultText } from '../components/DefaultText';
import { useDispatch } from 'react-redux';
import {setFilters} from '../store/actions/meals';

const CreateFilterOptions = () => {
    const [gf, setGf] = React.useState(false);
    const [lf, setLf] = React.useState(false);
    const [vegan, setVegan] = React.useState(false);
    const [vegetarian, setVegetarian] = React.useState(false);
    const dispatch = useDispatch();
    const saveFilters = React.useCallback(() => {
        const appliedFilters = {
            isVegetarian: vegetarian, 
            isVegan: vegan, 
            isLactoseFree: lf, 
            isGlutenFree: gf
        }
        dispatch(setFilters(appliedFilters));
    }, [vegetarian, vegan, lf, gf, dispatch])
    return {options: [
        {
            text: 'Gluten-free',
            value: gf,
            key:'gf',
            onChange: () => setGf(e => !e)
        },
        {
            text: 'Lactose-free',
            value: lf,
            key: 'lf',
            onChange: () => setLf(e => !e)
        },
        {
            text: 'Vegan',
            value: vegan,
            key: 'vegan',
            onChange: () => setVegan(e => !e)
        },
        {
            text: 'Vegetarian',
            value: vegetarian,
            key: 'vegetarian',
            onChange: () => setVegetarian(e => !e)
        }
    ], saveFilters
    }
}

const FiltersScreen = (props) => {
    const {options, saveFilters} = CreateFilterOptions();
    React.useEffect(() => {
        props.navigation.setParams({setFilters: saveFilters})
    }, [saveFilters])
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Available Filters / Restrictions
            </Text>
            {options.map(e => (
                <View key={e?.key} style={styles.switchContainer}>
                    <DefaultText>{e?.text}</DefaultText>
                    <Switch value={e?.value} onChange={e?.onChange}></Switch>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        paddingVertical: 20,
    },
    switchContainer: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 40,
        paddingVertical: 10

    }

});

FiltersScreen.navigationOptions =  ({navigation}) => ({
    headerTitle: 'Filters',
    headerLeft: (props) => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={'ios-menu'} 
                  color={Platform.OS === 'android' ? 'white' : COLORS.primary}
                  onPress={() => navigation.toggleDrawer()} 
                  style={styles.favIcon}/>
        </HeaderButtons>
    ),
    headerRight: (props) => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={'ios-save'} 
                  color={Platform.OS === 'android' ? 'white' : COLORS.primary}
                  onPress={() =>{
                      const save = navigation.getParam('setFilters');
                      save();
                      }} style={styles.favIcon}/>
        </HeaderButtons>
    )
    // headerRight with save ios-save
    // set params in useEffect


});

export default FiltersScreen;

// track color in switch
// thumbColor for android