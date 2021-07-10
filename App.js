import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [listGoals, setListGoals] = useState([]);
    const [isModalOn, setModalOn] = useState(false);

	const addGoalHandler = (newGoal) => {
		console.log('a')
		setListGoals(currentGoals => [...currentGoals, newGoal]);
		setModalOn(false);
	}
	const deleteItem = (itemId) => {
		setListGoals(currentGoals => currentGoals.filter(e => e.id !== itemId));
	}
    const showModal = () => setModalOn(true);
	const closeModal = () => setModalOn(false);
	return (
		// Viw is to apply styles
		<View style={styles.screen}>
			{/* Strings must be rendered within Text component */}
			{/* <Text>Open up App.js to start working on your app!</Text>  */}
			{/* <StatusBar style="auto" /> */}
			{/*  Every view is flex by default, and column direction, in css it's row by defult */}
			<Button title={'Add new goal'} onPress={showModal}/>
			<GoalInput addGoalHandler={addGoalHandler} isModalOn={isModalOn} closeModal={closeModal}/>
			<FlatList keyExtractor={(e, i) => `${e.id}`} data={listGoals} renderItem={(d) => (
				<GoalItem deleteHandler={() => deleteItem(d.item.id)}>
					{d.item.title}
				</GoalItem>
			)}/>
				
		</View>
	);
}
 
// Might give optimization and validation to invalid syntax
const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
