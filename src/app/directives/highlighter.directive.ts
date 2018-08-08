import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { NgOnChangesFeature } from '../../../node_modules/@angular/core/src/render3';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnChanges {
  
  @Input()
  bookCode:string

  constructor(private eleRef:ElementRef,private renderer:Renderer2)
  {

  }
  
  ngOnChanges()
  {
      let color = this.bookCode === 'B001' ? 'green' :  this.bookCode === 'B002' ?'yellow' : 'red'
      this.renderer.setStyle(this.eleRef.nativeElement,'background-color',color);
  }


}
