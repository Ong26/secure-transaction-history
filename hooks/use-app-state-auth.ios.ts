import { LocalAuthOptions } from "@/constants/local-auth";
import useLocalAuth from "@/store/use-local-auth";
import useSecureMask from "@/store/use-secure-mask";
import * as LocalAuthentication from "expo-local-authentication";
import { LinkProps, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
export const useAppStateAuth = () => {
	const { secureMask, setSecureMask } = useSecureMask();
	const { setIsLocalAuthenticated } = useLocalAuth();
	const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
	const pathname = usePathname() as LinkProps["href"];
	useEffect(() => {
		const handleAppStateChange = async (nextAppState: AppStateStatus) => {
			if (appState === "background" && nextAppState === "active") {
				const authResult = await LocalAuthentication.authenticateAsync(LocalAuthOptions);
				const isLocalAuthenticated = authResult.success;
				setIsLocalAuthenticated(isLocalAuthenticated);
			} else if (appState === "active" && (nextAppState === "inactive" || nextAppState === "background")) {
				setSecureMask(true);
			}

			setAppState(nextAppState);
		};

		const subscription = AppState.addEventListener("change", handleAppStateChange);
		return () => {
			subscription.remove();
		};
	}, [appState, pathname, secureMask]);
};
