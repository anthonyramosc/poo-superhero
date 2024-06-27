import { Injectable } from '@angular/core';
import { Superhero } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private hero: Superhero;

  constructor() {
    this.hero = new Superhero(
      'Bruce Wayne',
      'Batman',
      ['Detective skills', 'Martial arts', 'Gadgets'],
      'Gotham City'
    );
  }

  getHero(): Superhero {
    return this.hero;
  }

  fightCrime(): string {
    return this.hero.fightCrime();
  }

  displayPowers(): string {
    return this.hero.displayPowers();
  }
}