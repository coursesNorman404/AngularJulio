import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[contar-clicks]'
})

export class ContarClicksDirective {
  clackN = 0
   @HostBinding('style.opacity') opacity: number = .1

   @HostListener('click', ['$event.target']) onclick(btn) {
    console.log('a', btn, 'Numero de clicks', this.clackN++)
    this.opacity += .1
   }
}