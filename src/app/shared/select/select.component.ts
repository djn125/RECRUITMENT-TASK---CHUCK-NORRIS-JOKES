import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options;
  @Input() control: AbstractControl;
  @Input() placeholder: string;

  constructor() { }
}
