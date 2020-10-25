import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GB } from 'src/app/config/bot.config';
import { Bot, UI } from 'src/app/models/Ibot';
import { HsnService } from 'src/app/services/hsn.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gb-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  appName: string = GB.AppName;
  hsnDataObject: Bot.IHSNCode[];
  calcFormObj: UI.FieldGroup;
  calcForm: FormGroup;
  rateTypeDropdown: { key?: string, value?: string }[];
  constructor(private hsnSvc: HsnService, private uiSvc: UiService) { }
  ngOnInit() {
    this.hsnSvc.fetchHsn().subscribe((response: Bot.IHSNCode[]) => {
      this.hsnDataObject = response;
    });
    this.rateTypeDropdown = [{
      key: 'cgst_sgst',
      value: 'CGST & SGST'
    }, {
      key: 'igst',
      value: 'IGST'
    }];
    this.createForm();
  }
  createForm() {
    this.uiSvc.generateCalcFieldGroup().subscribe(f => {
      this.calcFormObj = f;
      this.calcFormObj.fields.forEach(field => {
        if (field.type === 'DROPDOWN') { field.dropdownFields = this.rateTypeDropdown; }
      });
      return this.uiSvc.generateForm(f.fields).subscribe(form => {
        this.calcForm = form;
      });

    });
  }
  submittedDataHandler(data) {
    console.log(data);
  }
 
  filterHSN(input: any) {
    //   this.hsnDataObject.filter()
  }
  calculate() {
    console.log(this.calcForm.value);
  }

}
