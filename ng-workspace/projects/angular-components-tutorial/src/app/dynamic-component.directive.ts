import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {

  constructor(private _containerRef: ViewContainerRef) { }

}
