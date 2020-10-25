import { Type } from '@angular/compiler';

// tslint:disable-next-line: no-namespace
export namespace UI {
   //  export type FieldType  = 'TEXT | PASSWORD | DATE | CHECKBOX | RADIO';
   export interface Field {
      id?: string;
      label?: string;
      type?: any; // FieldType;
      required?: boolean;
      readonly?: boolean;
      value?: string;
      dropdownFields?: any[];
   }
   export interface FieldGroup {
      title?: string;
      id?: string;
      fields: Field[];
   }
}

// tslint:disable-next-line: no-namespace
export namespace Bot {
   export interface IHSNCode {
      codes: string;
      description: string;
      cgst_rate?: string;
      sgst_rate?: string;
      igst_rate?: string;
      compensation_cess?: string;
   }
}
