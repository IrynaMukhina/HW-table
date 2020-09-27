import { Component, ContentChildren, QueryList, ContentChild, AfterContentInit } from '@angular/core';
import { ColumnHeaderDirective } from '../directives/column-header/column-header.directive';
import { TableCellDirective } from '../directives/table-cell/table-cell.directive';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss']
})
export class TableColumnComponent implements AfterContentInit {

  constructor() { }

  @ContentChild(ColumnHeaderDirective) headerTemplate: ColumnHeaderDirective;
  @ContentChildren(TableCellDirective) cellTemplates: QueryList<TableCellDirective>;

  ngAfterContentInit() {
    console.log(this.headerTemplate);
    console.log(this.cellTemplates.toArray(), 'cellTemplates');
  }
}
