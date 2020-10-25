import { UI } from '../models/Ibot';
// tslint:disable-next-line: no-namespace
export namespace GB {
    export const AppName = 'GST bot';
    export const CalFieldGroup: UI.FieldGroup = {
        title: 'GST Total Calculater',
        id: 'calcForm',
        fields: [
            {
                id: 'netAmount', label: 'Net Amount', type: 'TEXT', required: false, value: '', readonly: false
            },
            {
                id: 'hsnCode', label: 'HSN Code or Tariff Item', type: 'TEXT', required: false, value: '', readonly: false
            },
            {
                id: 'rate', label: 'CGST/SGST/ IGST ', type: 'DROPDOWN', required: false, value: '', dropdownFields: [], readonly: false
            }
            ,
            {
                id: 'grassAmount', label: 'Grass Amount ', type: 'TEXT', required: false, value: '', readonly: true
            }
        ]
    };
}
