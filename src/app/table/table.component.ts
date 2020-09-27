import { Component, OnInit, ContentChildren, QueryList, ContentChild, ElementRef, Input } from '@angular/core';
import { TableColumnDirective } from '../directives/table-column/table-column.directive';
import { ColumnHeaderDirective } from '../directives/column-header/column-header.directive';
import { TableCellDirective } from '../directives/table-cell/table-cell.directive';
import { TableColumnComponent } from '../table-column/table-column.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }

  @Input() items: Array<any>;

  @ContentChildren(TableColumnComponent) columnList: QueryList<TableColumnComponent>;
  // @ContentChildren(ColumnHeaderDirective) headersList: QueryList<ColumnHeaderDirective>;
  // @ContentChildren(TableCellDirective) cellList: QueryList<TableCellDirective>;

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log('column template list');
    console.log(this.columnList);

    // console.log('header template list');
    // console.log(this.headersList.toArray());

    // console.log('cell template list');
    // console.log(this.cellList.toArray());
  }
}
