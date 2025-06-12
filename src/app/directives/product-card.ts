import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCard implements OnChanges {
  constructor(public elem: ElementRef) {}

  @Input() color: string = 'red';

  ngOnInit() {
    this.elem.nativeElement.style.borderRadius = '8px';
    this.elem.nativeElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.elem.nativeElement.style.transition = 'box-shadow 0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  }

  ngOnChanges(): void {
    this.elem.nativeElement.style.border = `1px solid  ${this.color}`;
  }
}
