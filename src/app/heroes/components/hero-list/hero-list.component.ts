import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../core/services/hero.service';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name']

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getAll().subscribe(
      (data) => {
        this.heroes = data;
      }
    );
  }
}
