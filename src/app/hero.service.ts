import { Injectable } from '@angular/core';
import { Heroes } from './mocks/heroes';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHerores() : Hero[] {
    return Heroes;
  }
}
