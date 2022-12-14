import { NgModule } from '@angular/core';
import { TotsTableComponent } from './components/tots-table/tots-table.component';
import { BasePrintColumnComponent } from './columns/base-print-column/base-print-column.component';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TotsTableComponent,
    BasePrintColumnComponent
  ],
  imports: [
    // Angular Material
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    TotsTableComponent,
  ]
})
export class TotsTableModule { }
