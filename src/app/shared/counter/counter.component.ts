import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Output() quantity: EventEmitter<number> = new EventEmitter<number>()
  counter = 0;

  changeQuantity(value: number): void {
    this.counter = this.counter + value;
    this.validate()
  }

  validate(): void {
    if(this.counter > 100) {
      this.counter = 100;
    } else if(this.counter < 0) {
      this.counter = 0;
    }
    this.emitQuantity();
  }

  emitQuantity(): void {
    this.quantity.emit(this.counter);
  }
}
