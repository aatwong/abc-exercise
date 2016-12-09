import { Component } from '@angular/core';



const CASES: Case[] = [
  {patientId: 1234, dob: '01/01/1900', name: 'Scott Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1234, dob: '01/01/1901', name: 'Linda Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1234, dob: '01/01/1910', name: 'Caitlin Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1233, dob: "06/23/1999", name: 'adam jonesss', serviceId: 1124, service: "obamacare"}
];

export class Case {
  patientId: number;
  dob: string;  //date type?
  name: string;
  serviceId: number;
  service: string;
}

@Component({
  moduleId: module.id,
  selector: 'table-component',
  templateUrl: 'table.component.html'
})

export class TableComponent {
  cases = CASES;
}
