// src/store/useStore.ts
import create from 'zustand';

interface AuthState {
  user: any | null;
  setUser: (user: any) => void;
  logout: () => void;
}

const useStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useStore;
