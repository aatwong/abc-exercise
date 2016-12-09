import { Component, OnInit } from '@angular/core';
import { Case } from './case';
import { CaseService } from './case.service';
//import { FilterPipe } from './filter-pipe';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'table-component',
  //pipes: [FilterPipe],
  providers: [CaseService],
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit {
  
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
