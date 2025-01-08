import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

const BalanceCard = () => {
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();
	const toggleVisible = () => {
		setIsVisible(!isVisible);
	};
	const navigateToTransaction = () => {
		router.push("/transaction");
	};
	return (
		<View style={styles.balanceCard}>
			<Text style={styles.balanceTitle}>Balance</Text>
			<View style={styles.balanceContainer}>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>RM</Text>
					{isVisible ? <Text style={styles.amount}>1000.00</Text> : <Text style={styles.amount}>****</Text>}
				</View>
				<Pressable onPress={toggleVisible}>
					<FontAwesome5 name={isVisible ? "eye-slash" : "eye"} size={24} color="white" />
				</Pressable>
			</View>
			<View style={styles.actionContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Reload</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.secondaryButton} onPress={navigateToTransaction}>
					<Text style={styles.transactionHistoryText}>Transactions</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BalanceCard;

const styles = StyleSheet.create({
	balanceCard: {
		padding: Padding.md,
		paddingBlockStart: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		flexDirection: "column",
		backgroundColor: tintColorLight,
	},
	balanceContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		backgroundColor: "transparent",
	},
	amountContainer: {
		flexDirection: "row",
		backgroundColor: "transparent",
		alignItems: "center",
		gap: 5,
	},
	balanceTitle: {
		fontSize: 18,
		color: "white",
	},
	amount: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
	},
	amountSymbol: {
		fontSize: 24,
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
		width: "auto",
		marginTop: 10,
	},
	secondaryButton: {
		backgroundColor: "transparent",
		padding: 10,
		width: "auto",
		marginTop: 10,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
	transactionHistoryText: {
		fontSize: 18,
		fontWeight: "500",
		color: "white",
		textDecorationLine: "underline",
	},
	actionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "transparent",
		gap: 10,
		marginTop: 8,
	},
});