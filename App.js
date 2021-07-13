import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './components/Header';
import {StartGameScreen} from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import {GameOverScreen} from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

  })

}

export default function App() {
  const [selectedNumber, setSelectedNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);
  const [isGameOver, setGameOver] = React.useState(false);
  const [dataLoaded, setDataLoaded] = React.useState(false);

  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts} 
                        onFinish={() => setDataLoaded(true)}
                        onError={(e) => console.log(e)}
                        />)
  }

  const startGameHandler = (n) => {
    setSelectedNumber(n);
    setGuessRounds(0);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  const restartGameHandler = () => {
    setGameOver(false);
    setGuessRounds(0);
  }

  let content = (
    <StartGameScreen startGameHandler={startGameHandler}/>
  )

  if (selectedNumber && isGameOver){
    content = (
      <GameOverScreen restartGameHandler={restartGameHandler} rounds={guessRounds} 
                      userChoice={selectedNumber}/>
    )
  }
  else if (selectedNumber) {
    content = (
      <GameScreen userChoice={selectedNumber} gameOverHandler={gameOverHandler}/>
    )
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number'}/>
      {content}
      {/* <AppLoading/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
