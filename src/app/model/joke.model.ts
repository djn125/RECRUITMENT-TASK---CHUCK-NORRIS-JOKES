export interface JokeModel {
  type: string;
  value: JokeBody
}

export interface JokeBody {
  id: number;
  joke: string;
}
