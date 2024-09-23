import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss'
})
export class PlanetCardComponent {

  @Input() planetname:string = 'no planetname';
  
  
  @Input() planetImg:string = 'imgSRC';

  constructor (){};

}
