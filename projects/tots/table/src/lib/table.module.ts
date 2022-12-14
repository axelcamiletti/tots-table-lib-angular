import { NgModule } from '@angular/core';
import { TotsTableComponent } from './components/tots-table/tots-table.component';
import { BasePrintColumnComponent } from './columns/base-print-column/base-print-column.component';



@NgModule({
  declarations: [
    TotsTableComponent,
    BasePrintColumnComponent
  ],
  imports: [
    
  ],
  exports: [
    TotsTableComponent
  ]
})
export class TotsTableModule { }
