import BackButton from "@/components/back-button";
import { tintColorLight } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
export default function TransactionDetailLayout() {
	return (
		<Stack screenOptions={{ headerStyle: { backgroundColor: tintColorLight }, headerTintColor: "white" }}>
			<Stack.Screen
				name="[guid]"
				options={{ headerShadowVisible: false, title: "Transaction Detail", headerLeft: () => <BackButton /> }}
			/>
		</Stack>
	);
}
