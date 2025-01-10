import React from "react";
import { Appearance, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { Padding } from "@/constants/style";
import { FontAwesome } from "@expo/vector-icons";

const HeaderRight = () => {
	const colorScheme = useColorScheme();
	const setColorScheme = (scheme: "light" | "dark") => {
		Appearance.setColorScheme(scheme);
	};
	const toggleColorScheme = () => {
		setColorScheme(colorScheme === "light" ? "dark" : "light");
	};
	return (
		<TouchableOpacity style={styles.container} onPress={toggleColorScheme}>
			<FontAwesome name={colorScheme === "light" ? "sun-o" : "moon-o"} size={28} color={"white"} />
		</TouchableOpacity>
	);
};

export default HeaderRight;

const styles = StyleSheet.create({
	container: {
		paddingRight: Padding.sm,
	},
});
