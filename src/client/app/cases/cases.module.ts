import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CasesRoutingModule } from './cases-routing.module';

@NgModule({
  imports: [CommonModule, CasesRoutingModule],
  declarations: [CasesComponent],
  exports: [CasesComponent],
  //bootstrap: [ CasesComponent ]
})


export class CasesModule { }
