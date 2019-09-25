import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private element:ElementRef) { }

  highlightText(color:string){
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onmouseenter(){
    this.highlightText('yellow');
  }
  @HostListener('mouseleave') onmouseleave(){
    this.highlightText(null);
  }
}