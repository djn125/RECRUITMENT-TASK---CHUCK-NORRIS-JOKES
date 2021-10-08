import {Component, Input, OnInit} from '@angular/core';
import {JokeModel} from "../../model/joke.model";

@Component({
  selector: 'app-joke-wrapper',
  templateUrl: './joke-wrapper.component.html',
  styleUrls: ['./joke-wrapper.component.scss']
})
export class JokeWrapperComponent {
  @Input() joke: JokeModel;

}
