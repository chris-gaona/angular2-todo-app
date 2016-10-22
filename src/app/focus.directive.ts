import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[inputFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
