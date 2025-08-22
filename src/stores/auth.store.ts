import { create } from "zustand";

interface IUseAuthStore {
  isAuth: boolean;
  setIsAuth: (newState: boolean) => void;
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (newState) => set({ isAuth: newState }),
}));
