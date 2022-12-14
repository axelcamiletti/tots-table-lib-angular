import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

/** Components */
import { TotsTableComponent } from './components/tots-table/tots-table.component';
import { TotsTableApiComponent } from './components/tots-table-api/tots-table-api.component';

/** Columns */
import { BasePrintColumnComponent } from './columns/base-print-column/base-print-column.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';



@NgModule({
  declarations: [
    TotsTableComponent,
    BasePrintColumnComponent,
    StringColumnComponent,
    TotsTableApiComponent
  ],
  imports: [
    CommonModule,
    // Angular Material
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    TotsTableComponent,
    TotsTableApiComponent
  ]
})
export class TotsTableModule { }
