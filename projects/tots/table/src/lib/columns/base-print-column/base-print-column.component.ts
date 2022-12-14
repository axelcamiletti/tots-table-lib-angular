import { Component, Input, ViewContainerRef } from '@angular/core';
import { TotsColumn } from '../../entities/tots-column';

@Component({
  selector: 'tots-base-print-column',
  templateUrl: './base-print-column.component.html',
  styleUrls: ['./base-print-column.component.css']
})
export class BasePrintColumnComponent {

  @Input() column!: TotsColumn;
  @Input() item: any;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.column.component);
    (<any>view.instance).column = this.column;
    (<any>view.instance).item = this.item;
  }
}
