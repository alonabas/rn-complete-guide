import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import mealsReducer from './store/reducers/meals';

const mainReducers = combineReducers({
  meals: mealsReducer,
});
const store = createStore(mainReducers)

enableScreens();

const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = React.useState(false);

  if (!isFontsLoaded){
    return (
      <AppLoading startAsync={fetchFonts} 
                  onFinish={() => setFontsLoaded(true)} 
                  onError={() => console.log('error')}/>
    )
  }
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
