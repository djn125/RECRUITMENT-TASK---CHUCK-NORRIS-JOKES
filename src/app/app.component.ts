import {Component, OnInit} from '@angular/core';
import {JokesService} from "./services/jokes.service";
import {Observable} from "rxjs";
import {JokeModel} from "./model/joke.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {JokesTypesEnum} from "./enum/jokes-types.enum";
import {HttpParams} from "@angular/common/http";
import {JokesCategoriesModel} from "./model/jokes-categories.model";
import {DomSanitizer} from "@angular/platform-browser";
import {JokeParamsModel} from "./model/joke-params.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  joke$: Observable<JokeModel>;
  jokesCategories$: Observable<JokesCategoriesModel>;
  jokesFormControl: FormGroup;
  jokesTypes: typeof JokesTypesEnum = JokesTypesEnum;
  value: string = '';

  constructor(private jokesService: JokesService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.jokesService.getAvailableJokesCategories();
    this.jokesCategories$ = this.jokesService.jokesCategories$;
    this.buildJokesForm()
    this.getJoke()
    this.joke$ = this.jokesService.joke$;
  }

  get chosenName(): string {
    return this.jokesFormControl.get('name').value
  }

  buildJokesForm(): void {
    this.jokesFormControl = this.formBuilder.group(
      {
        limitTo: [[]],
        name: ['', Validators.maxLength(50)]
      }
    )
  }

  getJoke(): void {
    const params = this.prepareParams(this.jokesFormControl.getRawValue());
    this.jokesService.getRandomJoke(params);
  }

  prepareParams(data): JokeParamsModel {
    return new JokeParamsModel(data.limitTo, data.name ? data.name.split(' ')[0] : '', data.name.split(' ')[1] ? data.name.split(' ')[1] : '')
  }

  getMoreJokes(quantity: number): void {
    this.jokesService.getMoreJokes(quantity);
    let jokesArray: JokeModel[];
    this.jokesService.jokesArray$.subscribe(res => jokesArray = res);
  }
}
