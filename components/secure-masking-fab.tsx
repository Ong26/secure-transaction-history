import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import useSecureMask from "@/store/use-secure-mask";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const SecureMaskingFab = () => {
	const { secureMask, toggleSecureMask } = useSecureMask();
	return (
		<Pressable onPress={toggleSecureMask} style={styles.container}>
			<FontAwesome5 name={secureMask ? "eye-slash" : "eye"} size={24} color="white" />
		</Pressable>
	);
};

export default SecureMaskingFab;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 36,
		right: 24,
		backgroundColor: tintColorLight,
		padding: Padding.md,
		borderRadius: "50%",
		height: 72,
		width: 72,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
