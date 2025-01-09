import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, useThemeColor } from "../themed";

type Props = {
	title?: string;
	refetch: () => void;
};

const ErrorScreen = ({ refetch, title = "Error" }: Props) => {
	const bgColor = useThemeColor({}, "background");
	const textColor = useThemeColor({}, "text");
	return (
		<ScrollView
			contentContainerStyle={styles.contentContainer}
			style={[styles.container, { backgroundColor: bgColor }]}
		>
			<Text style={styles.text}>{title}</Text>
			<TouchableOpacity onPress={refetch} activeOpacity={0.8}>
				<View style={styles.refetchContainer}>
					<Text style={styles.refetchText}>Please tap to retry</Text>
					<MaterialIcons name="refresh" size={24} color={textColor} />
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default ErrorScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
	},
	refetchContainer: {
		flexDirection: "row",
		gap: 4,
		padding: 10,
		borderRadius: 12,
		alignItems: "center",
	},
	refetchText: {
		fontSize: 16,
	},
});
