import React from 'react';
import {StyleSheet, View, Text, Image, Platform, ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultText } from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { COLORS } from '../constants/colors';
import {toggeFavorite} from '../store/actions/meals';

const List = ({items}) => (
    <React.Fragment>
        {items.map(e => (
            <View style={styles.elementStyle}>
                <DefaultText key={e} >{e}</DefaultText>
            </View>
        ))}
    </React.Fragment>
)


const Ingradients = ({items=[]}) => {
    return (
        <React.Fragment>
            <Text style={styles.title}>Ingradients</Text>
            <List items={items}/>
        </React.Fragment>
    )
}

const Steps = ({items=[]}) => {
    return (
        <React.Fragment>
            <Text style={styles.title}>Steps</Text>
            <List items={items}/>
        </React.Fragment>
    )
}

const MealDetailsScreen = ({navigation}) => {
    const element = navigation.getParam('element', {});
    return (
        <View style={styles.screen}>
            <View style={styles.topContainer}>
                <Image style={styles.image} source={{uri: element.imageUrl}} />
                <View style={styles.detailsContainer}>
                    {['duration', 'complexity', 'affordability'].map(e => (
                        <View style={styles.propertyStyle} key={e}>
                            <DefaultText key={e} style={styles.textStyle}>{element[e]}</DefaultText>
                        </View>
                    ))}
                </View>
            </View>
            <ScrollView style={{flex: 1}}>
                <Ingradients items={element.ingradients}/>
                <Steps items={element.steps}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // justifyContent: 'center',
        flex: 1,
        // alignItems:'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        shadowOffset: {width: 1, height: 8},
        shadowOpacity: 0.1,
        elevation: 8,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1    
    },
    propertyStyle: {
        paddingVertical: 5,
    },
    textStyle: {
        textTransform: 'uppercase'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 22,
        marginVertical: 10,
    },
    elementStyle: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 2,
        paddingVertical: 6,
        marginHorizontal: 20,
        marginVertical: 6
    }
});


const AddToFavoritesButton = (props) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.meals.favoriteMeals.some(e => 
        e.id === props.navigation.getParam('element', {}).id)
    );
    const toggleFavorite = () => {
        const id = props.navigation.getParam('element', {}).id;
        dispatch(toggeFavorite(id))   
    }
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
                color={Platform.OS === 'android' ? 'white' : COLORS.primary}
                onPress={toggleFavorite} style={styles.favIcon}/>
        </HeaderButtons>
    )
}

MealDetailsScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: navigation.getParam('title', ''),
        headerRight: (<AddToFavoritesButton navigation={navigation}/>)
    }
};

export default MealDetailsScreen;

//ionicons form expo/vector-icons IconComponent prop = Ionicons iconSize=23 color primary by platform, headerRight in nav
// import Item, HeaderButtons, Item iconName='ios-star'
// HeaderButtonComponent = our new component inside HaederButtons