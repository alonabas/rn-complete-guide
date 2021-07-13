import React from 'react';
import { View, StyleSheet, Button, Text, Alert, Image } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';
import {BodyText} from '../components/BodyText';
import { TitleText } from '../components/TitleText';

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
            <BodyText>Number of rounds: {rounds}</BodyText>
            <BodyText>Number was: {userChoice}</BodyText>
            <Button title={'NEW GAME'} onPress={restartGameHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
});