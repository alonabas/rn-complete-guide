
import React, {useState}  from "react";
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = ({addGoalHandler, isModalOn, closeModal}) => {
    const [enteredGoal, setEnteredGoal] = useState('');
	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText)
	}
    const onSaveGoal = () => {
        saveNewGoal();
        setEnteredGoal('');
    }

    const saveNewGoal = () => addGoalHandler({title: enteredGoal, id: Date.now()})
    return (
        <Modal visible={isModalOn} animationType="slide" >
            <View style={styles.inputContainer}>
                {/* border-color - do not work in RN, only camel case  */}
                <TextInput placeholder={'Course goal'} 
                        style={styles.input} 
                        onChangeText={goalInputHandler} 
                        value={enteredGoal}/>
                <View style={styles.buttonsContainer}>

                    <View style={styles.button}>
                        <Button title={'Cancel'} onPress={closeModal} color="red"/>
                    </View>        
                    <View style={styles.button}>
                        <Button title={'Add'} onPress={onSaveGoal}/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
	inputContainer: {
        flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        width: '80%',
    },
	input: { 
		borderColor: 'black', 
		borderWidth: 1, 
		padding: 10, 
        width: '80%',
        marginBottom: 10,
	},
    button: {
        width: '40%'
    }
});

export default GoalInput;