import { create } from "zustand";

interface IUseSearchStore {
	isOpened: boolean;
	toggleOpen: () => void;
}
export const useSearchStore = create<IUseSearchStore>((set) => ({
	isOpened: false,
	toggleOpen: () => set((state) => ({ isOpened: !state.isOpened })),
}));
