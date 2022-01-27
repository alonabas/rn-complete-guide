import * as Notifications from 'expo-notifications';
import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
	  shouldShowAlert: true
 	}),
  });

export default function App() {
	const [pushToken, setPushToken] = React.useState();
	React.useEffect(async () => {
		let settings = await Notifications.getPermissionsAsync();
		if (!settings.granted && settings.ios?.status !== Notifications.IosAuthorizationStatus.PROVISIONAL) {
			settings = await Notifications.requestPermissionsAsync({});
			if (!settings.granted && settings.ios?.status !== Notifications.IosAuthorizationStatus.PROVISIONAL) {
				Alert.alert(
					"No access to noyifications",
					"Yous should allow access to notifications",
					[
						{
							text: "Cancel",
							onPress: () => Alert.alert("Cancel Pressed"),
							style: "cancel",
						},
					],
					{
						cancelable: true,
					}
				);
				return;
			}
		}
		const expoPushToken = await Notifications.getExpoPushTokenAsync();
		if (expoPushToken.data) setPushToken(expoPushToken.data);
	}, []);

	React.useEffect(async () => {
		const subscription1 = Notifications.addNotificationReceivedListener( (notification) => {
			console.log('After addNotificationReceivedListener')
			console.log(notification.request.trigger.type)
			// if (notification.request.trigger.type === 'push'){
			// 	Notifications.scheduleNotificationAsync({
			// 		content: {
			// 		title: notification?.request?.trigger?.remoteMessage?.data?.title ?? `You've got new notification`,
			// 		body: notification?.request?.trigger?.remoteMessage?.data?.message ?? `Open to see your new notification`,
			// 		},
			// 		trigger: { seconds: 2 },
			// 	});
			// }
		});

		const subscription2 = Notifications.addNotificationResponseReceivedListener( (notification) => {
			console.log('After user clicks notification')
			console.log(notification)
		});	  
		return () => {
			Notifications.removeNotificationSubscription(subscription1);
			Notifications.removeNotificationSubscription(subscription2);
		};
	}, []);

	const applyNotification = async () => {
		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Local Notification!",
				body: 'My local notification triggered by button!',
			},
			trigger: {
				seconds: 10,
			},
		});
	}

	const applyPushNotification = () => {
		fetch('https://exp.host/--/api/v2/push/send',{method: 'POST', body: JSON.stringify({
				"to": pushToken,
				"title": "Push Notification!",
				"body": "This is push notification send from local device, triggered by button"
			})})
	}
	return (
		<View style={styles.container}>
			<Button onPress={applyNotification} title='Set local notification' />
			<Button onPress={applyPushNotification} title='Set push notification' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
});
