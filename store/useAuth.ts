import { create } from "zustand";

interface AuthState {
	isAuthenticated: boolean;
	user: any | null;
	login: (userData: any) => void;
	logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
	isAuthenticated: false,
	user: null,
	login: (userData) => set({ isAuthenticated: true, user: userData }),
	logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuth;
