import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsTableApiConfig } from '../../entities/tots-table-api-config';
import { TotsTableConfig } from '../../entities/tots-table-config';

@Component({
  selector: 'tots-table-api',
  templateUrl: './tots-table-api.component.html',
  styleUrls: ['./tots-table-api.component.scss']
})
export class TotsTableApiComponent implements OnInit {
  @Input() config = new TotsTableApiConfig();

  @Output() onAction = new EventEmitter<TotsActionTable>();

  configTable = new TotsTableConfig();

  ngOnInit(): void {
    this.loadConfig();
  }

  onTableAction(action: TotsActionTable) {
    if(action.key == 'page-change'){
      this.config.query.per_page = action.item.pageSize;
      this.config.query.page = action.item.pageIndex + 1;
    }
  }

  loadConfig() {
    this.configTable.id = this.config.id;
    this.configTable.columns = this.config.columns;
    this.configTable.obs = this.config.service.list(this.config.query);
  }
}
