import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CasesComponent } from './cases.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cases', component: CasesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
