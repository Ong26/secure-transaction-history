import HeaderRight from "@/components/header-right";
import { tintColorLight } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";

export default function DashboardLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: tintColorLight,
				},
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					headerShadowVisible: false,
					title: "",
					headerRight: () => <HeaderRight />,
				}}
			/>
		</Stack>
	);
}
