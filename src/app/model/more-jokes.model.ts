import {JokeModel} from "./joke.model";

export interface MoreJokesModel {
  type: string;
  value: JokeModel[];
}
