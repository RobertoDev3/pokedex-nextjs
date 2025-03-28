import { create } from 'zustand';

type NavStore = {
  isNavBarLoading: boolean;
  setIsNavBarLoading: (loading: boolean) => void;
};

export const useNavStore = create<NavStore>(set => ({
  isNavBarLoading: false,
  setIsNavBarLoading: (loading: boolean) => set({ isNavBarLoading: loading }),
}));
