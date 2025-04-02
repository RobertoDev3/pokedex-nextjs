import { create } from 'zustand';

type SortOption = 'lowest_number' | 'highest_number' | 'a_to_z' | 'z_to_a';

export type PokemonFilterState = {
  searchTerm: string;
  selectedType: string;
  sortOption: SortOption;
  setSearchTerm: (term: string) => void;
  setSelectedType: (type: string) => void;
  setSortOption: (option: SortOption) => void;
};

export const usePokemonFilters = create<PokemonFilterState>(set => ({
  searchTerm: '',
  selectedType: 'all_types',
  sortOption: 'lowest_number',
  setSearchTerm: searchTerm => set({ searchTerm }),
  setSelectedType: selectedType => set({ selectedType }),
  setSortOption: sortOption => set({ sortOption }),
}));
