import { create } from "zustand";

type SecureMaskState = {
	secureMask: boolean;
	setSecureMask: (secureMask: boolean) => void;
	toggleSecureMask: () => void;
};

const useSecureMask = create<SecureMaskState>((set) => ({
	secureMask: false,
	setSecureMask: (secureMask) => set({ secureMask }),
	toggleSecureMask: () => set((state) => ({ secureMask: !state.secureMask })),
}));

export default useSecureMask;
