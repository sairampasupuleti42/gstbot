import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { GB } from '../config/bot.config';
import { UI } from '../models/Ibot';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  generateCalcFieldGroup() {
    // console.log(GB.CalFieldGroup);
    return of(GB.CalFieldGroup);
  }
  generateForm(fields: UI.Field[]) {
    const group: any = {};
    fields.forEach(field => {
      group[field.id] = new FormControl('');
    });
    return of(new FormGroup(group));
  }
}
