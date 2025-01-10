import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, useThemeColor } from "./themed";
export const ErrorFallback = ({ refetch, error }: { refetch: () => void; error: Error | null }) => {
	const bgColor = useThemeColor({}, "background");
	const textColor = useThemeColor({}, "text");
	const title = error?.message || "Uh oh! Something went wrong";
	return (
		<ScrollView
			contentContainerStyle={styles.contentContainer}
			style={[styles.container, { backgroundColor: bgColor }]}
		>
			<Text style={styles.text}>{title}</Text>
			<TouchableOpacity onPress={refetch} activeOpacity={0.8}>
				<View style={styles.refetchContainer}>
					<Text style={styles.refetchText}>Please tap to retry</Text>
					<FontAwesome name="refresh" size={24} color={textColor} />
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
};

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
