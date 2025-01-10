import { tintColorLight } from "@/constants/colors";
import { LocalAuthOptions } from "@/constants/local-auth";
import useLocalAuth from "@/store/use-local-auth";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
	const { setIsLocalAuthenticated } = useLocalAuth();
	useEffect(() => {
		const checkFingerprint = async () => {
			try {
				const res = await LocalAuthentication.authenticateAsync(LocalAuthOptions);
				const isLocalAuthenticated = res.success;
				if (!isLocalAuthenticated) {
					router.replace("/login/error");
					return;
				}
				setIsLocalAuthenticated(true);
				router.replace("/");
			} catch (error) {
				setIsLocalAuthenticated(false);
			}
		};
		checkFingerprint();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>YTL Digital Bank</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		backgroundColor: tintColorLight,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 32,
		color: "white",
		fontWeight: "bold",
	},
});

export default Login;
