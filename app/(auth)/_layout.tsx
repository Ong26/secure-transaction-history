import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";

import ErrorBoundaryCapture from "@/components/error-boundary-capture";
import HeaderRight from "@/components/header-right";
import { tintColorLight } from "@/constants/colors";
import useLocalAuth from "@/store/use-local-auth";

export default function RootLayout() {
	const { isLocalAuthenticated } = useLocalAuth();
	if (!isLocalAuthenticated) return <Redirect href="/login/page" />;
	return (
		<ErrorBoundaryCapture>
			<Stack
				screenOptions={{
					headerShadowVisible: false,
					headerTintColor: "white",
					headerStyle: { backgroundColor: tintColorLight },
					headerTitleStyle: { color: "white" },
					headerRight: () => <HeaderRight />,
				}}
			>
				<Stack.Screen name="(dashboard)/index" options={{ title: "" }} />
				<Stack.Screen name="transaction/index" options={{ title: "Transactions" }} />
				<Stack.Screen name="transaction/detail/[guid]" options={{ title: "Detail" }} />
			</Stack>
		</ErrorBoundaryCapture>
	);
}
