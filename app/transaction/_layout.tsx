import BackButton from "@/components/back-button";
import { tintColorLight } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
export default function DashboardLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: tintColorLight },
				headerTintColor: "white",
			}}
		>
			<Stack.Screen
				name="index"
				options={{ headerShadowVisible: false, title: "Transaction", headerLeft: () => <BackButton /> }}
			/>
			<Stack.Screen name="detail" options={{ headerShadowVisible: false, title: "" }} />
		</Stack>
	);
}
