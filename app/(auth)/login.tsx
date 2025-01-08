import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = {};

const Login = (props: Props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Login</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.background,
	},
});

export default Login;
