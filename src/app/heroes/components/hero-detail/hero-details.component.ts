import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../../../core/services/hero.service";
import { Hero } from "../../../core/models/hero.model";

@Component ({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  hero! : Hero;

  constructor(private heroService : HeroService,
              private location : Location,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.get(id).subscribe(
      {next: (hero) => this.hero = hero}
    );
  }

  save() : void {
    this.heroService.update(this.hero).subscribe(
      {next: () => this.goBack()}
    )
  }

  isFormInvalid() : boolean {
    return ! this.hero.name.trim();
  }

  goBack() : void {
    this.location.back();
  }

}
