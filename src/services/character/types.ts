export type Resident = Pick<Character, "id">;

export type Location = {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: Resident[];
};

export type Episode = {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: Character[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
};

export type FilterCharacter = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

export type Characters = {
  info: Info;
  results: Character[];
};

export type CharactersArgs = {
  page?: number;
  filter?: FilterCharacter;
};
