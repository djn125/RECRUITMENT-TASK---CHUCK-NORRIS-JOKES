import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-save-jokes',
  templateUrl: './save-jokes.component.html',
  styleUrls: ['./save-jokes.component.scss']
})
export class SaveJokesComponent {
  @Output() getMoreJokes: EventEmitter<number> = new EventEmitter<number>();
  quantity: number;
}
