import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective {

  constructor(private e1: ElementRef, private renderer: Renderer2) { 
    e1.nativeElement.style.opacity = '.6';
    e1.nativeElement.style.transition = '.4s opacity';
  }

  @HostListener('mouseover') mouseover(): void {
    this.renderer.setStyle(this.e1.nativeElement, 'opacity', '1');
  }

  @HostListener('mouseout') mouseout(): void {
    this.renderer.setStyle(this.e1.nativeElement, 'opacity', '.6');
  }

}
