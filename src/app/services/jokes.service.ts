import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {JokeModel} from "../model/joke.model";
import {environment} from "../../environments/environment";
import {JokesCategoriesModel} from "../model/jokes-categories.model";
import {MoreJokesModel} from "../model/more-jokes.model";
import {JokeParamsModel} from "../model/joke-params.model";

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

  getRandomJoke(params?: JokeParamsModel): void {
    this.http.get<JokeModel>(`${this.api}/jokes/random`, {params : params.getHttpParams()} ).subscribe((joke) => {
      this.joke.next(joke)
    })
  }

  getAvailableJokesCategories(): void {
    this.http.get<JokesCategoriesModel>(`${this.api}/categories`).subscribe((jokesCategories) => {
      this.jokesCategories.next(jokesCategories)
    })
  }

  getMoreJokes(quantity: number): void {
    this.http.get<MoreJokesModel>(`${this.api}/jokes/random/${quantity}`).subscribe((jokesArray) => {
      this.downloadFile(jokesArray.value)
    })
  }

  downloadFile(data: JokeModel[]) {
    const blob = new Blob([JSON.stringify(data)], { type: 'text/plain' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
