import React from 'react';
import { View, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random * (max-min) + min);
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

export const GameScreen = ({userChoice}) => {
    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userChoice));
    return (
        <View style={styles.screen}>
        
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        
    }
});