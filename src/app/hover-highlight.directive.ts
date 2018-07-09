import {
  Directive, ElementRef,
  Renderer2, HostListener, HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input('appHoverHighlight') highlightColor: {background: string, text: string};

  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') MockNgModuleResolver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor.background);
    this.textColor = this.highlightColor.text;
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.textColor = 'black';
  }

}
