import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
  animations: [
    trigger('animateSvg', [
      state('initial', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('final', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('initial => final', animate('1.5s')),
    ]),
  ],
})
export class Main2Component {
  animationState = 'initial';

  openInstagramLink() {
    const instagramUrl = 'https://www.instagram.com/mirac.fellaz/';
    window.open(instagramUrl, '_blank');
  }
  openTelefonLink() {
    const whatsappaUrl = ' https://wa.me/4915225906248';
    window.open(whatsappaUrl, '_blank');
  }

  triggerAnimation() {
    this.animationState = 'final';
  }
}
