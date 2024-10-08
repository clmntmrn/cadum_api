import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from "react-native";

// AA LIRE !! COUCOU TOUT LE MONDE J'AI CODE CA J'ESPERE QUE CA VOUS VA, PERSO JE NE SAIS PAS
// DE QUELLE API VOUS PARLIEZ MAIS J'AI TOUT MIS EN PLACE POUT QUE VOUS FASSIEZ LE FETCH AVEC LES DONNES QU'ON MET
// DES BISES ET COURAGE

export default function App() {
	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [storedIngredients, setStoredIngredients] = useState("");

	// Ajouter un élément aa notre FlatList
	const addIngredient = () => {
		if (ingredient.trim().length > 0) {
			setIngredients([
				...ingredients,
				{ id: Math.random().toString(), value: ingredient },
			]);
			setIngredient("");
		}
	};

	// Supprimer les ingrédients
	const removeIngredient = (id) => {
		setIngredients((prevIngredients) =>
			prevIngredients.filter((item) => item.id !== id)
		);
	};

	// afficher et stocker les éléments pour l'affichage t'as capté
	const logIngredients = () => {
		const ingList = ingredients.map((item) => item.value).join(", ");
		if (ingredients.length > 0) {
			setStoredIngredients(ingList);
		} else {
			setStoredIngredients("Aucun ingrédient ajouté.");
		}
		console.log("Ingrédients stockés : ", ingList);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Vider le frigo !!</Text>

			{/* text input */}
			<View style={{ ...styles.inputContainer, width: "90%" }}>
				<TextInput
					style={styles.input}
					placeholder="Entrez un ingrédient"
					value={ingredient}
					onChangeText={setIngredient}
				/>
				<TouchableOpacity style={styles.addButton} onPress={addIngredient}>
					<Text style={styles.addButtonText}>Ajouter</Text>
				</TouchableOpacity>
			</View>

			{/* listes de ce qu'on va graille */}
			<View style={{ width: "90%" }}>
				<FlatList
					data={ingredients}
					renderItem={({ item }) => (
						<View style={styles.itemContainer}>
							<Text style={styles.itemText}>{item.value}</Text>
							<TouchableOpacity
								style={styles.deleteButton}
								onPress={() => removeIngredient(item.id)}>
								<Text style={styles.deleteButtonText}>Supprimer</Text>
							</TouchableOpacity>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>

			{/* afficher ce qu'on va graille */}
			<View style={{ width: "90%", marginTop: 20 }}>
				<View style={{ width: "90%", marginTop: 20 }}>
					<Text style={styles.resultText}>
						Ingrédients pour la recherche : {storedIngredients}
					</Text>
				</View>
			</View>

			{/* bouton pour le fetch mais pour le moment c'est just un console log mdrr */}
			<View style={{ width: "90%" }}>
				<TouchableOpacity style={styles.logButton} onPress={logIngredients}>
					<Text style={styles.logButtonText}>Trouver une recette !!</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f8f9fa",
		paddingHorizontal: 20,
		paddingVertical: 40,
		alignItems: "center",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
		color: "#333",
	},
	inputContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	input: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 15,
		borderRadius: 5,
		borderColor: "#ddd",
		borderWidth: 1,
		marginRight: 10,
	},
	addButton: {
		backgroundColor: "#28a745",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	addButtonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	itemContainer: {
		backgroundColor: "#fff",
		padding: 15,
		borderRadius: 5,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#ddd",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	itemText: {
		fontSize: 16,
	},
	deleteButton: {
		backgroundColor: "#dc3545",
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 5,
	},
	deleteButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 14,
	},
	logButton: {
		backgroundColor: "#007bff",
		paddingVertical: 15,
		borderRadius: 5,
		marginTop: 20,
		alignItems: "center",
	},
	logButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
	resultText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
	},
});
