import {HttpParams} from "@angular/common/http";
import {JokeModel} from "./joke.model";

export class JokeParamsModel {
  limitTo: JokeModel[];
  firstName: string;
  lastName: string;

  constructor(limitTo: JokeModel[], firstName: string, lastName: string) {
    this.limitTo = limitTo;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getHttpParams(): HttpParams {
    let httpParams = new HttpParams()

    if (this.limitTo?.length) {
      httpParams = JokeParamsModel.appendParams('limitTo', JSON.stringify(this.limitTo), httpParams);
    }
    httpParams = JokeParamsModel.appendParams('firstName', this.firstName, httpParams);
    httpParams = JokeParamsModel.appendParams('lastName', this.lastName, httpParams);

    return httpParams;
  }

  private static appendParams(name: string, value: string, params: HttpParams): HttpParams {
    if (value?.length) {
      return params.append(name, value);
    }

    return params;
  }
}

