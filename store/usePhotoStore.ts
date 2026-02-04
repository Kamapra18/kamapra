import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      clearPhotos: () => set({ capturedPhotos: [] }),
    }),
    {
      name: "kamapra-photo-storage", // Nama key di storage
      storage: createJSONStorage(() => sessionStorage), // Pake session storage biar kalo tab ditutup, data bersih
    },
  ),
);
