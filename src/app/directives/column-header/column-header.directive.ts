import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[columnHeader]'
})
export class ColumnHeaderDirective {

  constructor(
    public readonly template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    // this.viewContainer.createEmbeddedView(this.template);
  }
}
