import {Component, Input, OnInit} from '@angular/core';
import {ButtonTypesEnum} from "../../enum/button-types.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonTypesEnum = ButtonTypesEnum.dark;
  buttonTypes: typeof ButtonTypesEnum = ButtonTypesEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
