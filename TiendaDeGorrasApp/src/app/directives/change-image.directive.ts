import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeImage]',
})
export class ChangeImageDirective {
  @Input() imageObject: { lado: string; frente: string } | null = null;

  constructor() {
    console.log(this.imageObject);
  }

  @HostListener('mouseover', ['$event'])
  changeImage(event: any) {
    event.target.src = this.imageObject?.frente!;
  }

  @HostListener('mouseleave', ['$event'])
  returnImage(event:any) {
    event.target.src = this.imageObject?.lado!;
  }
}
