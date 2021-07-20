import React from 'react';
import { View, StyleSheet, Text, Alert, ScrollView, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';
import { BodyText } from '../components/BodyText';
import { MainButton } from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import * as ScreenOrientation from "expo-screen-orientation";
// import {ScreenOrientation} from "expo"
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min) + min);
    if (rndNum === exclude && max > min) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

const renderListItem = (length, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{length - itemData.index}</BodyText>
        <Text>{itemData.item}</Text>
    </View>
)

export const GameScreen = ({userChoice, gameOverHandler}) => {
    const low = React.useRef(1);
    const high = React.useRef(100);
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    const initialGuess = generateRandomBetween(low.current, high.current, userChoice);
    const [pastGuesses, setPastGuesses] = React.useState([]);
    const [currentGuess, setCurrentGuess] = React.useState(initialGuess);

    React.useEffect(() => {
        if (currentGuess === userChoice){
            gameOverHandler(pastGuesses.length);
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
        setPastGuesses(old => [ currentGuess.toString() ,...old]);
    }
    const updateGreater = () => {
        if (currentGuess > userChoice){
            Alert.alert(`Don't lie!`, `You know that this is wrong`, [{text: 'Sorry!', style: 'cancel'}])
        }
        else {
            low.current = currentGuess + 1;
            setGuess(low.current, high.current, currentGuess);
        }
        setPastGuesses(old => [ currentGuess.toString() ,...old]);
    }

    return (
        <ScrollView>

        <View style={styles.screen}>
            <BodyText>Opponent's guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCOntainer}>
                <MainButton onPress={updateLower}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </MainButton>
                <MainButton onPress={updateGreater}>                    
                    <Ionicons name="md-add" size={24} color="white"/>
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={pastGuesses} keyExtractor={(item) => item}
                            contentContainerStyle={styles.list}
                          renderItem={renderListItem.bind(this, pastGuesses.length)}/>
            </View>
            
        </View>
        </ScrollView>
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
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: 400,
        maxWidth: '90%',
    },
    listItem: {
        flexDirection: 'row',
        borderColor: "#ccc",
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        width: '60%',
        flex:1
    },
    list: {
        justifyContent: 'flex-end',
        flexGrow: 1,
    }
});