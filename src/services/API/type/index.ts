export interface PokemonsList {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export interface Pokemon {
  name: string;
  url: string;
}

export interface NameAndUrl {
  name: string;
  url: string;
};

export interface Ability {
  ability: NameAndUrl;
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number,
};

interface GameIndex {
  game_index: number,
  version: NameAndUrl;
  name: string;
  url: string;
};

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameAndUrl;
  version_group: NameAndUrl;
};

export interface Move {
  move: NameAndUrl;
  version_group_details: VersionGroupDetails[];
};

interface Type {
  type: NameAndUrl;
  slot: number;
};

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameAndUrl;
};

interface Sprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  other: any;
  versions: any;
};

export interface PokemonInfo {
  abilities: Ability[];
  base_experience: number,
  forms: NameAndUrl[];
  game_indices: GameIndex[];
  height: number,
  held_items: []
  id: number,
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number,
  species: NameAndUrl;
  sprites: Sprite;
  stats: Stats[];
  types: Type[];
  weight: number,
};

interface Effect {
  effect: string;
  language: NameAndUrl;
  short_effect: string;
};

export interface MoveDetails {
  effect_entries: Effect[];
};

export interface AbilityDetails {
  effect_entries: Effect[];
};