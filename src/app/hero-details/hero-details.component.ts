import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['../heroes/heroes.component.scss']
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
