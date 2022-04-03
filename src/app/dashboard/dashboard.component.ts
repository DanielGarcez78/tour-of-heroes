import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../core/models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroesService.getHerores().subscribe(
      {next: (data) => this.heroes = data.slice(1, 5)}
    )
  }

}
