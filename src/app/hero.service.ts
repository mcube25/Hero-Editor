import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { MessageService } from './message.service';


 @Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero> {
    //send message afetr receiving hero
     this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
