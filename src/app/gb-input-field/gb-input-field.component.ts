import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gb-input-field',
  templateUrl: './gb-input-field.component.html',
  styleUrls: ['./gb-input-field.component.css']
})
export class GbInputFieldComponent implements OnChanges {
  @Input() field;
  @Output() submittedData: EventEmitter<any> = new EventEmitter<any>();
  @Input() formGroup: FormGroup;
  constructor() { }

  ngOnChanges() {
    console.log(this.formGroup)
  }
  onSubmitted(evt) {
    console.log(evt)
    this.submittedData.emit(evt);
  }

}
