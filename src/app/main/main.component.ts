import { Component, Renderer2, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animateSvg', [
      state('initial', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('final', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('initial => final', animate('1s')),
    ]),
  ],
})
export class MainComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  animationState = 'initial';

  scrollToAppMain2() {
    const appMain2 =
      this.el.nativeElement.ownerDocument.getElementById('appMain2');
    if (appMain2) {
      appMain2.scrollIntoView({ behavior: 'smooth' });
    }
  }

  triggerAnimation() {
    this.animationState = 'final';
  }
}
