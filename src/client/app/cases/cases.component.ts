import { Component } from '@angular/core';

const CASES: Case[] = [
  {patientId: 1234, dob: '01/01/1900', name: 'Scott Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1234, dob: '01/01/1901', name: 'Linda Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1234, dob: '01/01/1910', name: 'Caitlin Walker', serviceId: 4455, service:'calHEERS'},
  {patientId: 1233, dob: "06/23/99", name: 'adam jonesss', serviceId: 1124, service: "obamacare"}
];

export class Case {
  patientId: number;
  dob: string;  //date type?
  name: string;
  serviceId: number;
  service: string;
}

@Component({
  //moduleId: module.id,
  selector: 'cases-component',
  //templateUrl: 'cases.component.html',
  template: `
  <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Patient ID</th>
          <th>Date of Birth</th>
          <th>Service ID</th>
          <th>Service</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let case of cases">
          <td>{{case.name}}</td>
          <td>Patient ID: {{case.patientId}}</td>
          <td>Date of Birth: {{case.dob}}</td>
          <td>Service ID: {{case.serviceId}}</td>
          <td>Service: {{case.service}}</td>
        </tr>
      </tbody>
    </table>
  `
})

export class CasesComponent {
  cases = CASES;
  case: Case = {
    patientId: 123443,
    dob: "06/23/99",
    name: 'adam jonesss',
    serviceId: 112412412,
    service: "obamacare",
  }
}
