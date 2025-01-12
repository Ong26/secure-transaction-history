import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { BaseError } from "@/errors";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { StyleSheet, TouchableOpacity } from "react-native";
type Props = { children: React.ReactNode };

const ErrorBoundaryCapture = ({ children }: Props) => {
	const { reset } = useQueryErrorResetBoundary();
	const router = useRouter();
	return (
		<ErrorBoundary
			onReset={reset}
			fallbackRender={({ error, resetErrorBoundary }) => {
				let err = error instanceof BaseError ? (error as BaseError) : new BaseError();

				const onPressRetry = () => {
					resetErrorBoundary();
					if (!!err.action?.redirectPath) router.replace(err.action.redirectPath);
					if (err.action?.refetch) reset();
				};
				return (
					<View style={styles.container}>
						<View style={styles.content}>
							<Text style={styles.title}>{err.title}</Text>
							<Text style={styles.description}>{err.description}</Text>
							<View style={styles.buttonContainer}>
								<TouchableOpacity style={styles.button} onPress={onPressRetry}>
									<Text style={styles.buttonText}>{err.action.actionText}</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				);
			}}
		>
			{children}
		</ErrorBoundary>
	);
};

export default ErrorBoundaryCapture;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		padding: 20,
		borderRadius: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: tintColorLight,
		padding: 10,
		borderRadius: 5,
		marginBlockStart: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	description: {
		fontSize: 16,
		textAlign: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
	},
});
