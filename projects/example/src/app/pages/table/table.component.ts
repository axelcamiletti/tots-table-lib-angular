import { Component, OnInit } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { MoreMenuColumnComponent, StringColumnComponent, TotsActionTable, TotsTableConfig } from 'projects/tots/table/src/public-api';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  config = new TotsTableConfig();

  ngOnInit(): void {
    this.loadConfig();
  }

  onTableAction(action: TotsActionTable) {
    console.log(action);
  }

  loadConfig() {
    this.config.id = 'table-example';
    this.config.columns = [
      { key: 'title', component: StringColumnComponent, title: 'Titulo', field_key: 'title' },
      { key: 'more', component: MoreMenuColumnComponent, title: '', extra: { width: '60px', actions: [
        { icon: 'add', title: 'Editar', key: 'edit' },
        { icon: 'add', title: 'Eliminar', key: 'remove' },
      ]} },
    ];

    let data = new TotsListResponse();
    data.data = [
      { title: 'Item 1' },
      { title: 'Item 2' },
      { title: 'Item 3' },
      { title: 'Item 4' },
      { title: 'Item 5' },
    ]

    this.config.obs = of(data);
  }
}
