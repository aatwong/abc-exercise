import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cases-component',
  templateUrl: 'cases.component.html'
})

export class CasesComponent {
  patientId: number;
  dob: string;  //date type?
  name: string;
  serviceId: number;
  service: string;
}
