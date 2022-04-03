import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Heroes } from '../mocks/heroes';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) {}

  getHerores() : Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add("HeroService : Fetched heroes")
    return heroes;
  }

  getHero(id: number) : Observable<Hero> {
    const hero = Heroes.find(hero => hero.id === id)!
    this.messageService.add(`HeroService : Fetched heroe id=${id}`);
    return of(hero);
  }
}