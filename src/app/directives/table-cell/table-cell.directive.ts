import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tableCell]'
})
export class TableCellDirective {

  constructor(
    public readonly template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    // this.viewContainer.createEmbeddedView(this.template);
  }
}
