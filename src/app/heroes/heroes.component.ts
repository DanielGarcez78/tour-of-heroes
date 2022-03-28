import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Heroes } from '../mocks/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = Heroes;

  selectedHero?: Hero

  showHeroDetails(hero: Hero): void {
    this.selectedHero = hero;
  }

}
