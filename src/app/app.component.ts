import {Component, OnInit} from '@angular/core';
import {JokesService} from "./services/jokes.service";
import {Observable} from "rxjs";
import {JokeModel} from "./model/joke.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {JokesTypesEnum} from "./enum/jokes-types.enum";
import {HttpParams} from "@angular/common/http";
import {JokesCategoriesModel} from "./model/jokes-categories.model";

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

  constructor(private jokesService: JokesService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.jokesService.getAvailableJokesCategories();
    this.jokesCategories$ = this.jokesService.jokesCategories$;
    this.buildJokesForm()
    this.getJoke()
    this.joke$ = this.jokesService.joke$;
  }

  get chosenName() {
    return this.jokesFormControl.get('firstName').value
  }

  buildJokesForm() {
    this.jokesFormControl = this.formBuilder.group(
      {
        limitTo: [[]],
        firstName: [''],
        lastName: ['']
      }
    )
  }

  getJoke() {
    const params = this.jokesFormControl.getRawValue();
    const paramsObject = {
      limitTo: JSON.stringify(params.limitTo),
      firstName: params.firstName
    }
    this.jokesService.getRandomJoke(paramsObject);
  }
}
