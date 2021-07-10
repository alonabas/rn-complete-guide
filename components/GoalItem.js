import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.deleteHandler} activeOpacity={0.2}>
            <View style={styles.listItem}>
                <Text >{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
 
	listItem: {
		padding: 10,
		backgroundColor: 'gray',
		borderColor: 'black',
		borderWidth: 1,
		marginVertical: 10,
	}
});

export default GoalItem;