// Tipagem completa para a PokeAPI utilizando type

// Recursos básicos
export type NamedAPIResource = {
  name: string;
  url: string;
};

export type APIResource = {
  url: string;
};

export type APIResourceList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

// Pokemon
export type PokemonAbility = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

export type PokemonGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

export type PokemonHeldItemVersion = {
  rarity: number;
  version: NamedAPIResource;
};

export type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
};

export type PokemonMoveVersion = {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
};

export type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

export type PokemonSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: VersionsSprites;
};

export type DreamWorldSprites = {
  front_default: string | null;
  front_female: string | null;
};

export type HomeSprites = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type OfficialArtworkSprites = {
  front_default: string | null;
  front_shiny: string | null;
};

export type ShowdownSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type OtherSprites = {
  dream_world: DreamWorldSprites;
  home: HomeSprites;
  'official-artwork': OfficialArtworkSprites;
  showdown: ShowdownSprites;
};

// Generation I
export type GenerationISprite = {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
};

// Generation II
export type GenerationIISpritesCrystal = {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
};

export type GenerationIISpritesGoldSilver = {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
};

// Generation III
export type GenerationIIIEmeraldSprites = {
  front_default: string | null;
  front_shiny: string | null;
};

export type GenerationIIIRubySapphireSprites = {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
};

// Generation IV
export type GenerationIVSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

// Generation V - Black/White
export type AnimatedSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type GenerationVBlackWhiteSprites = {
  animated: AnimatedSprites;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

// Generation VI
export type GenerationVISprites = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

// Generation VII
export type GenerationVIIIcons = {
  front_default: string | null;
  front_female: string | null;
};

export type GenerationVIISprites = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

// Generation VIII (apenas icons)
export type GenerationVIIIIcons = {
  front_default: string | null;
  front_female: string | null;
};

export type VersionsSprites = {
  'generation-i'?: {
    'red-blue'?: GenerationISprite;
    yellow?: GenerationISprite;
  };
  'generation-ii'?: {
    crystal?: GenerationIISpritesCrystal;
    gold?: GenerationIISpritesGoldSilver;
    silver?: GenerationIISpritesGoldSilver;
  };
  'generation-iii'?: {
    emerald?: GenerationIIIEmeraldSprites;
    'firered-leafgreen'?: GenerationIIIRubySapphireSprites;
    'ruby-sapphire'?: GenerationIIIRubySapphireSprites;
  };
  'generation-iv'?: {
    'diamond-pearl'?: GenerationIVSprites;
    'heartgold-soulsilver'?: GenerationIVSprites;
    platinum?: GenerationIVSprites;
  };
  'generation-v'?: {
    'black-white'?: GenerationVBlackWhiteSprites;
  };
  'generation-vi'?: {
    'omegaruby-alphasapphire'?: GenerationVISprites;
    'x-y'?: GenerationVISprites;
  };
  'generation-vii'?: {
    icons?: GenerationVIIIcons;
    'ultra-sun-ultra-moon'?: GenerationVIISprites;
  };
  'generation-viii'?: {
    icons?: GenerationVIIIIcons;
  };
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: PokemonGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
};

// Pokemon Species
export type PokemonSpecies = {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: Array<{
    entry_number: number;
    pokedex: NamedAPIResource;
  }>;
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource | null;
  evolution_chain: APIResource;
  habitat: NamedAPIResource | null;
  generation: NamedAPIResource;
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
  }>;
  form_descriptions: Array<{
    description: string;
    language: NamedAPIResource;
  }>;
  genera: Array<{
    genus: string;
    language: NamedAPIResource;
  }>;
  varieties: Array<{
    is_default: boolean;
    pokemon: NamedAPIResource;
  }>;
};

// Abilities
export type AbilityEffectChange = {
  effect_entries: Array<{
    effect: string;
    language: NamedAPIResource;
  }>;
  version_group: NamedAPIResource;
};

export type AbilityFlavorText = {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
};

export type Ability = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
  effect_entries: Array<{
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
  }>;
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: Array<{
    is_hidden: boolean;
    pokemon: NamedAPIResource;
    slot: number;
  }>;
};

// Tipos (Type)
export type PokemonTypeDetail = {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
  };
  game_indices: Array<{
    game_index: number;
    generation: NamedAPIResource;
  }>;
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource | null;
  moves: NamedAPIResource[];
  pokemon: Array<{
    slot: number;
    pokemon: NamedAPIResource;
  }>;
};

// Moves
export type MoveMetaData = {
  ailment: NamedAPIResource;
  category: NamedAPIResource;
  min_hits: number | null;
  max_hits: number | null;
  min_turns: number | null;
  max_turns: number | null;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
};

export type Move = {
  id: number;
  name: string;
  accuracy: number | null;
  effect_chance: number | null;
  pp: number;
  priority: number;
  power: number | null;
  damage_class: NamedAPIResource;
  effect_entries: Array<{
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
  }>;
  effect_changes: Array<{
    version_group: NamedAPIResource;
    effect_entries: Array<{
      effect: string;
      language: NamedAPIResource;
    }>;
  }>;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
  }>;
  generation: NamedAPIResource;
  meta: MoveMetaData;
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
};

// Evolution Chain
export type ChainLink = {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: Array<{
    gender: number | null;
    held_item: NamedAPIResource | null;
    item: NamedAPIResource | null;
    known_move: NamedAPIResource | null;
    known_move_type: NamedAPIResource | null;
    location: NamedAPIResource | null;
    min_level: number | null;
    min_happiness: number | null;
    min_beauty: number | null;
    min_affection: number | null;
    needs_overworld_rain: boolean;
    party_species: NamedAPIResource | null;
    party_type: NamedAPIResource | null;
    relative_physical_stats: number | null;
    time_of_day: string;
    trade_species: NamedAPIResource | null;
    turn_upside_down: boolean;
  }>;
  evolves_to: ChainLink[];
};

export type EvolutionChain = {
  id: number;
  baby_trigger_item: NamedAPIResource | null;
  chain: ChainLink;
};

// Generations
export type Generation = {
  id: number;
  name: string;
  abilities: NamedAPIResource[];
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
  main_region: NamedAPIResource;
  moves: NamedAPIResource[];
  pokemon_species: NamedAPIResource[];
  types: NamedAPIResource[];
  version_groups: NamedAPIResource[];
};

// Items
export type Item = {
  id: number;
  name: string;
  cost: number;
  fling_effect: NamedAPIResource | null;
  fling_power: number | null;
  attributes: NamedAPIResource[];
  category: NamedAPIResource;
  effect_entries: Array<{
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
  }>;
  flavor_text_entries: Array<{
    text: string;
    language: NamedAPIResource;
  }>;
  game_indices: Array<{
    game_index: number;
    generation: NamedAPIResource;
  }>;
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
  sprites: {
    default: string | null;
  };
};

export type ItemAttribute = {
  id: number;
  name: string;
  items: NamedAPIResource[];
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
};

export type ItemCategory = {
  id: number;
  name: string;
  items: NamedAPIResource[];
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
};

// Locations
export type LocationArea = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: Array<{
    encounter_method: NamedAPIResource;
    version_details: Array<{
      rate: number;
      version: NamedAPIResource;
    }>;
  }>;
  location: NamedAPIResource;
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
};

export type Location = {
  id: number;
  name: string;
  regions: NamedAPIResource[];
  names: Array<{
    name: string;
    language: NamedAPIResource;
  }>;
  game_indices: Array<{
    game_index: number;
    generation: NamedAPIResource;
  }>;
  areas: NamedAPIResource[];
};

// Tipagem para a seção de evoluções da PokeAPI
export type EvolutionDetail = {
  item: NamedAPIResource | null;
  trigger: NamedAPIResource;
  gender: number | null;
  held_item: NamedAPIResource | null;
  known_move: NamedAPIResource | null;
  known_move_type: NamedAPIResource | null;
  location: NamedAPIResource | null;
  min_level: number | null;
  min_happiness: number | null;
  min_beauty: number | null;
  min_affection: number | null;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource | null;
  party_type: NamedAPIResource | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: NamedAPIResource | null;
  turn_upside_down: boolean;
};

export type EvolutionNode = {
  species: { name: string };
  evolves_to: EvolutionNode[];
};
