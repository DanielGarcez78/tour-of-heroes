import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesURL = `${environment.baseUrl}/heroes`

  constructor(private messageService : MessageService,
              private httpClient : HttpClient) {}

  getHerores() : Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesURL).pipe(
      tap((heroes) => this.log(`Fetched ${heroes.length} hero(es)`))
    );
  }

  getHero(id: number) : Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesURL}/${id}`).pipe(
      tap((hero) => this.log(`Fetched hero id=${hero.id} and name=${hero.name}`))
    )
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
