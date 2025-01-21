// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// interface IStorage {

// }

// export const useStorage = create<IStorage>()(
// 	persist(
// 		() => ({
// 			storage: { scrollPositions: {}, watchHistory: {} },
// 		}),
// 		{
// 			name: "storage", // name of item in the storage (must be unique)
// 			storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
// 			partialize: (state) => ({ ...state }),
// 		},
// 	),
// );
