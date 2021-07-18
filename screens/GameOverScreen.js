import React from 'react';
import { View, StyleSheet, Button, Text, Alert, Image } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';
import {BodyText} from '../components/BodyText';
import { TitleText } from '../components/TitleText';
import Colors from '../constants/colors';
import { MainButton } from '../components/MainButton';

export const GameOverScreen = ({restartGameHandler, rounds, userChoice}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over</TitleText>
            <View style={styles.imageContainer}>
            <Image source={{uri: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x21.jpg'}
                // require('../assets/success.png')
            } 
                   resizeMode='cover'
                   style={styles.image}/>
            </View>
            {/* For text components styles are passed to nested text components */}
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{rounds}</Text> round to guess 
                    the number <Text style={styles.highlight}>{userChoice}</Text>
                </BodyText>
            </View>
            
            <MainButton onPress={restartGameHandler}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'open-sans'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        marginVertical: 20
    },
    highlight: {
        color: Colors.primary,
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});