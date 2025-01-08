import React from "react";
import { StyleSheet } from "react-native";

import { View } from "@/components/themed";
import { FontAwesome } from "@expo/vector-icons";

const HeaderRight = () => {
	return (
		<View style={styles.container}>
			<FontAwesome name="user" size={24} color="white" />
		</View>
	);
};

export default HeaderRight;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		paddingRight: 10,
	},
});
