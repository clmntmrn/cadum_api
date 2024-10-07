import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
	const [joke, setJoke] = useState(null);

	const fetchJoke = async () => {
		try {
			const response = await fetch(
				"https://official-joke-api.appspot.com/random_joke"
			);
			const data = await response.json();
			setJoke(data);
			e;
		} catch (error) {
			console.log("Erreur lors de la récupération de la blague :", error);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Blague aléatoire</Text>
			<View style={{ width: "40%" }}>
				<TouchableOpacity
					onPress={fetchJoke}
					style={{
						...styles.button,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text>Click-me</Text>
				</TouchableOpacity>
			</View>
			{joke && (
				<View style={styles.jokeContainer}>
					<Text style={styles.jokeSetup}>{joke.setup}</Text>
					<Text style={styles.jokePunchline}>{joke.punchline}</Text>
				</View>
			)}
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
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	button: {
		height: 40,
		borderRadius: 10,
		backgroundColor: "#3333",
		marginBottom: 20,
	},
	jokeContainer: {
		marginTop: 20,
		padding: 10,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		width: "90%",
	},
	jokeSetup: {
		fontWeight: "bold",
	},
	jokePunchline: {
		marginTop: 5,
		fontStyle: "italic",
	},
});
