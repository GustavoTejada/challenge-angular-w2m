export interface Superhero {
  id:               number;
  name:             string;
  alias:            string;
  power:            string;
  team:             Team;
  first_appearance: string;
}

export enum Team {
  Avengers = "Avengers",
  Defenders = "Defenders",
  JusticeLeague = "Justice League",
}
