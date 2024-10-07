import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<View style={{ width: "40%" }}>
				<TouchableOpacity
					onPress={async () => {
						try {
							const response = await fetch(
								"https://official-joke-api.appspot.com/random_joke"
							);
							const data = await response.json(); // On convertit la réponse en JSON
							console.log(data);
						} catch (error) {
							console.log(
								"Erreur lors de la récupération de la blague :",
								error
							);
						}
					}}
					style={{
						...styles.button,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text>click-me</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		height: "100%",
		justifyContent: "center",
	},
	button: {
		height: 40,
		borderRadius: 10,
		width: "40%",
		backgroundColor: "#3333",
	},
});
