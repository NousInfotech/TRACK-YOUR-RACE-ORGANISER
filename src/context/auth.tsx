import { create } from "zustand";

interface AuthState {
  auth: boolean;
  showLogoutModal: boolean;
  onToggleLogoutModal: () => void;
  setAuth: (auth: boolean) => void;
}

export const useAuthState = create<AuthState>((set) => ({
  auth: false,
  showLogoutModal: false,
  setAuth: (auth: boolean) => set((state) => ({ ...state, auth })),
  onToggleLogoutModal: () =>
    set((state) => ({ ...state, showLogoutModal: !state.showLogoutModal })),
}));
