import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginError = () => {
	const router = useRouter();
	const retryLocalAuth = () => {
		router.replace("/login/page");
	};
	return (
		<View style={styles.container}>
			<View></View>
			<View>
				<Text style={styles.title}>YTL Digital Bank</Text>
				<Text style={styles.subtitle}>Authentication failed. Please try again.</Text>
			</View>
			<TouchableOpacity style={styles.retryButton} onPress={retryLocalAuth}>
				<Text style={styles.retryText}>Retry</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		backgroundColor: tintColorLight,
		justifyContent: "space-between",
		alignItems: "center",
		paddingBlock: 80,
		paddingInline: Padding.sm,
	},
	title: {
		textAlign: "center",
		fontSize: 32,
		color: "white",
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	retryButton: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 24,
		width: "100%",
	},
	retryText: {
		fontSize: 20,
		color: tintColorLight,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default LoginError;
