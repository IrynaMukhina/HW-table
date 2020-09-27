import { Directive, TemplateRef, Input, ViewContainerRef, ContentChild, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { ColumnHeaderDirective } from '../column-header/column-header.directive';
import { TableCellDirective } from '../table-cell/table-cell.directive';

@Directive({
  selector: '[tableColumn]'
})
export class TableColumnDirective {
  constructor(
    public readonly template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @ContentChildren(ColumnHeaderDirective, {descendants: true}) headerTemplate: QueryList<ColumnHeaderDirective>;
  @ContentChildren(TableCellDirective, {descendants: true}) cellTemplates: QueryList<TableCellDirective>;

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.template);
  }

  ngAfterContentInit() {
    console.log(this.headerTemplate);
    console.log(this.cellTemplates);
  }
}
