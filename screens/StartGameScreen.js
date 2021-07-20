import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Button, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Card} from '../components/Card';
import colors from '../constants/colors';
import {Input} from '../components/Input';
import { NumberContainer } from '../components/NumberContainer';
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText';
import { MainButton } from '../components/MainButton';

export const StartGameScreen = ({startGameHandler}) => {
    const [enteredValue, setEnteredValue] = React.useState();
    const [confirmed, setConfirmed] = React.useState(false);
    const [selectedNumber, setSelectedNumber] = React.useState();
    const [buttonWidth, setButtonWidth] = React.useState(Dimensions.get('window').width / 4);

    
    React.useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change');
        }
    },[]);

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number', 
                'Numebr has to be a number between 1 and 99', 
                [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        
        Keyboard.dismiss();
    }

    const onStartGame = () => startGameHandler(selectedNumber);
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>    
                <MainButton onPress={onStartGame}>START GAME</MainButton>
            </Card>
           
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <TitleText style={styles.title}> Start a new game </TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText >Select a number</BodyText>
                    <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' 
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        maxLength={2}/>
                    <View style={styles.buttonContainer}>
                        <View style={{width: buttonWidth}}>
                            <Button title='Reset' 
                                    onPress={resetInputHandler} 
                                    color={colors.accent}/>
                        </View>
                        <View style={{width: buttonWidth}}>
                            <Button title='Confirm' 
                                    onPress={confirmInputHandler} 
                                    color={colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal:  5

    },
    button: {
        // width: 100
        // Dimensions doesnt change dinamicaly
        width: Dimensions.get('window').width / 4, 
        // can also use percentage to achieve the same
    },
    inputContainer: {
        width: '90%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});