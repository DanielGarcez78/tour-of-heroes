import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  selectedHero?: Hero

  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHerores().subscribe(
      (data) => {
        this.heroes = data;
      }
    );
  }

  showHeroDetails(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent : Selected hero with id=${hero.id}`);
  }

}
