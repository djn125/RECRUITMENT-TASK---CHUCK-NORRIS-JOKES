import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JokeWrapperComponent} from "./joke-wrapper/joke-wrapper.component";
import {WhiteContentBoxComponent} from "./white-content-box/white-content-box.component";
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { CounterComponent } from './counter/counter.component';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import { SaveJokesComponent } from './components/save-jokes/save-jokes.component';
import {ClickOutsideDirective} from "../directives/click-outside.directive";

@NgModule({
  declarations: [
    JokeWrapperComponent,
    WhiteContentBoxComponent,
    ButtonComponent,
    SelectComponent,
    CounterComponent,
    InputComponent,
    SaveJokesComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
  ],
  exports: [
    JokeWrapperComponent,
    WhiteContentBoxComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    SaveJokesComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
