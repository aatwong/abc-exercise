import { Component, OnInit } from '@angular/core';
import { Case } from './case';
import { CaseService } from './case.service';

// const CASES: Case[] = [
//   {patientId: 1234, dob: '01/01/1900', name: 'Scott Walker', serviceId: 4455, service:'calHEERS'},
//   {patientId: 1234, dob: '01/01/1901', name: 'Linda Walker', serviceId: 4455, service:'calHEERS'},
//   {patientId: 1234, dob: '01/01/1910', name: 'Caitlin Walker', serviceId: 4455, service:'calHEERS'},
//   {patientId: 1233, dob: "06/23/1999", name: 'adam jonesss', serviceId: 1124, service: "obamacare"}
// ];

@Component({
  moduleId: module.id,
  selector: 'table-component',
  providers: [CaseService],
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit {
  //cases = CASES.filter(c => c.service === "obamacare");
  public cases: Case[];

  constructor(private _caseService: CaseService) {}  //"dependency injection"

  getCases() {
    this._caseService.getCases().then((cases: Case[]) => {
      this.cases = cases
    });
  }

  ngOnInit(): any {  //when component is done loading
    this.getCases();
  }
}
