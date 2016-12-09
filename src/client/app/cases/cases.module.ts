import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesComponent } from './cases.component';
import { TableComponent } from './table.component';
import { CasesRoutingModule } from './cases-routing.module';



@NgModule({
  imports: [CommonModule, CasesRoutingModule],
  declarations: [CasesComponent, TableComponent],
  exports: [CasesComponent],
  //bootstrap: [ CasesComponent ]
})


export class CasesModule { }
