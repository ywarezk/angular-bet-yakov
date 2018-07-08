import { Directive, Input, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


declare var Ladda: any;

@Directive({
  selector: '[ladda]'
})
export class LaddaDirective {
  @Input('ladda') set isLoading(value: boolean) {
    if (isPlatformBrowser(this._platformId)) {
      if (!this._ladda) {
        this._ladda = Ladda.create(this._buttonElement.nativeElement);
      }
      if (value) {
        this._ladda.start();
      } else {
        this._ladda.stop();
      }
    }
    
  }
  private _ladda: any;

  constructor(private _buttonElement: ElementRef, @Inject(PLATFORM_ID) private _platformId: Object) {
    
  }
}
