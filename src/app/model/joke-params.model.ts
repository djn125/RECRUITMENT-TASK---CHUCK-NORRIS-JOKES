import {JokesTypesEnum} from "../enum/jokes-types.enum";

export interface JokeParamsModel {
  type: JokesTypesEnum;
  firstName: string;
}
