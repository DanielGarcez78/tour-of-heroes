import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroes } from './mocks/heroes';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHerores() : Observable<Hero[]> {
    const heroes = of(Heroes);
    return heroes;
  }
}
