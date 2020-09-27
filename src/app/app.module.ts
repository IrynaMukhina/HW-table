import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableColumnDirective } from './directives/table-column/table-column.directive';
import { ColumnHeaderDirective } from './directives/column-header/column-header.directive';
import { TableCellDirective } from './directives/table-cell/table-cell.directive';
import { TableColumnComponent } from './table-column/table-column.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnDirective,
    ColumnHeaderDirective,
    TableCellDirective,
    TableColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
