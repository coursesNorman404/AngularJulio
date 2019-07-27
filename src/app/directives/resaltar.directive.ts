import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
  selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit {
  constructor (private elRef: ElementRef, private render: Renderer2) {}
  @Input('resaltar') type: string = ''
  ngOnInit() {
    if (this.type === 'pay') {
      this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}