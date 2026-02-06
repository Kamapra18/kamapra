import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { get, set, del } from "idb-keyval"; // Import helper untuk IndexedDB

// Helper untuk menghubungkan Zustand dengan IndexedDB
const idbStorage: StateStorage = {
  getItem: async (name) => (await get(name)) || null,
  setItem: async (name, value) => await set(name, value),
  removeItem: async (name) => await del(name),
};

interface PhotoStore {
  capturedPhotos: string[];
  setCapturedPhotos: (photos: string[]) => void;
  clearPhotos: () => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      capturedPhotos: [],
      setCapturedPhotos: (photos) => set({ capturedPhotos: photos }),
      clearPhotos: () => {
        set({ capturedPhotos: [] });
      },
    }),
    {
      name: "kamapra-photo-storage",
      storage: createJSONStorage(() => idbStorage), // Ganti sessionStorage ke idbStorage
    }
  )
);