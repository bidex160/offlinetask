import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputType } from 'src/models/index.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('inputRef') inputRef:  ElementRef;
  @Input() type: InputType;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() form: FormGroup;
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;  

  __value: string | number = '';
  @Input('mvalue') set _value(v: string | number) {
    this.__value = v || '';
  }

  
  @Output() mchange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  inputChange(event: any) {
    this.mchange.emit(event.target.value);
    this.__value = this.form.controls[this.name].value;
  }

  
}
