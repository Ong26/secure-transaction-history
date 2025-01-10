import { create } from "zustand";

type LocalAuthState = {
	isLocalAuthenticated: boolean;
	setIsLocalAuthenticated: (isLocalAuthenticated: boolean) => void;
};

const useLocalAuth = create<LocalAuthState>((set) => ({
	isLocalAuthenticated: false,
	setIsLocalAuthenticated: (isLocalAuthenticated) => set({ isLocalAuthenticated }),
}));

export default useLocalAuth;
