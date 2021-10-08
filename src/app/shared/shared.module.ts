import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JokeWrapperComponent} from "./joke-wrapper/joke-wrapper.component";
import {WhiteContentBoxComponent} from "./white-content-box/white-content-box.component";
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { CounterComponent } from './counter/counter.component';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    JokeWrapperComponent,
    WhiteContentBoxComponent,
    ButtonComponent,
    SelectComponent,
    CounterComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    JokeWrapperComponent,
    WhiteContentBoxComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent
  ]
})
export class SharedModule { }
