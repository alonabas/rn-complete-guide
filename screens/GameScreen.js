import React from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';
import { BodyText } from '../components/BodyText';
import defaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min) + min);
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

export const GameScreen = ({userChoice, gameOverHandler}) => {
    const low = React.useRef(1);
    const high = React.useRef(100);
    const [rounds, setRounds] = React.useState(0);
    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(low.current, high.current, userChoice));

    React.useEffect(() => {
        if (currentGuess === userChoice){
            gameOverHandler(rounds);
        }
    }, [currentGuess, userChoice]);

    const setGuess = (l,u, avoid) => setCurrentGuess(generateRandomBetween(l, u, avoid))

    const updateLower = () => {
        if (currentGuess < userChoice){
            Alert.alert(`Don't lie!`, `You know that this is wrong`, [{text: 'Sorry!', style: 'cancel'}])
        }
        else {
            high.current = currentGuess;
            setGuess(low.current, high.current, currentGuess);
        }
        setRounds(curRounds => curRounds+=1)
    }
    const updateGreater = () => {
        if (currentGuess > userChoice){
            Alert.alert(`Don't lie!`, `You know that this is wrong`, [{text: 'Sorry!', style: 'cancel'}])
        }
        else {
            low.current = currentGuess;
            setGuess(low.current, high.current, currentGuess);
        }
        setRounds(curRounds => curRounds+=1)
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCOntainer}>
                <Button title={'LOWER'} onPress={updateLower}/>
                <Button title={'GREATER'} onPress={updateGreater}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonCOntainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});