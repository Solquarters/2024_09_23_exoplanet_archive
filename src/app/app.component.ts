import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PlanetCardComponent } from './planet-card/planet-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, PlanetCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  planetStats = [
    {planetName: "planet1", planetImg: "./assets/img/exoplanet01.webp", planetRadius: "testradius"},
    {planetName: "planet2", planetImg: "./assets/img/exoplanet02.webp", planetRadius: "testradius"},
    {planetName: "planet3", planetImg: "./assets/img/exoplanet03.webp", planetRadius: "testradius"}
  ]



  buttonClicked(){
    alert('Button clicked yo');
  }
}
