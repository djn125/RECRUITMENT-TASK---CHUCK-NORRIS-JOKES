import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string  = '';
  @Input() control: AbstractControl;
  inputFocus = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInputFocus(isFocused: boolean) {
    this.inputFocus = isFocused;
  }
}
