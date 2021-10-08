import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {JokeModel} from "../model/joke.model";
import {environment} from "../../environments/environment";
import {JokeParamsModel} from "../model/joke-params.model";
import {JokesTypesEnum} from "../enum/jokes-types.enum";
import {JokesCategoriesModel} from "../model/jokes-categories.model";

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  api = environment.api

  joke: BehaviorSubject<JokeModel> = new BehaviorSubject<JokeModel>(null);
  jokesArray: BehaviorSubject<JokeModel[]> = new BehaviorSubject<JokeModel[]>([]);
  jokesCategories: BehaviorSubject<JokesCategoriesModel> = new BehaviorSubject<JokesCategoriesModel>(null);

  joke$: Observable<JokeModel> = this.joke.asObservable();
  jokesArray$: Observable<JokeModel[]> = this.jokesArray.asObservable();
  jokesCategories$: Observable<JokesCategoriesModel> = this.jokesCategories.asObservable();

  constructor(private http: HttpClient) {}

  getRandomJoke(params?) {
    console.log(params)
    this.http.get<JokeModel>(`${this.api}/jokes/random`, { params } ).subscribe((joke) => {
      this.joke.next(joke)
    })
  }

  getMoreJokes(quantity: number) {
    this.http.get<JokeModel[]>(`${this.api}/jokes/random/${quantity}`).subscribe((jokesArray) => {
      this.jokesArray.next(jokesArray)
    })
  }

  getAvailableJokesCategories() {
    this.http.get<JokesCategoriesModel>(`${this.api}/categories`).subscribe((jokesCategories) => {
      this.jokesCategories.next(jokesCategories)
    })
  }
}
