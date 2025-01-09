import * as LocalAuthentication from "expo-local-authentication";
import { LinkProps, useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

export const useAppStateAuth = () => {
	const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
	const [lastActiveRoute, setLastActiveRoute] = useState<LinkProps["href"]>("/");
	const [lastActiveParams, setLastActiveParams] = useState<unknown>(null);
	const router = useRouter();
	const pathname = usePathname() as LinkProps["href"];
	const params = useLocalSearchParams();
	useEffect(() => {
		const handleAppStateChange = async (nextAppState: AppStateStatus) => {
			console.log(pathname);
			if (appState === "background" && nextAppState === "active") {
				console.log(appState);
				const authResult = await LocalAuthentication.authenticateAsync({
					biometricsSecurityLevel: "strong",
					promptMessage: "Authenticate to continue",
				});
				const isLocalAuthenticated = authResult.success;
				if (!isLocalAuthenticated) {
					router.replace("/");
				} else {
					router.push(lastActiveRoute);
				}
			} else if (appState === "active" && nextAppState === "inactive") {
				setLastActiveRoute(pathname);
				setLastActiveParams(params);
			}

			setAppState(nextAppState);
		};

		const subscription = AppState.addEventListener("change", handleAppStateChange);
		return () => {
			subscription.remove();
		};
	}, [appState, pathname]);
};
