import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Superheroes} from "../core/interfaces/superherosList.interface";
import * as SuperheroListJSON from '../core/mocks/superheros.json';
import {Superhero} from "../core/interfaces/superhero.interface";

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {

  // @ts-ignore
  superHerosList: Superheroes = SuperheroListJSON;
  constructor(
  ) { }

  getAll() : Observable<Superhero[]>{
    return of(this.superHerosList.superheroes);
  }

  getOne(id: number): Observable<Superhero | null>{
    let superhero = this.superHerosList.superheroes.find((superhero) => superhero.id === id);
    return superhero ? of(superhero) : of(null);
  }

  searchForSuperheroName(name: string): Observable<Superhero[]>{
    if (!name) return of(this.superHerosList.superheroes);
    let superheroes = this.superHerosList.superheroes.filter((superhero) => superhero.name.toLowerCase().includes(name.toLowerCase()));
    return of(superheroes);
  }

  addSuperhero(superhero: Superhero): Observable<Superhero>{
    superhero.id = this.superHerosList.superheroes.length + 1;
    this.superHerosList.superheroes.push(superhero);
    return of(superhero);
  }

  editSuperhero(superheroToEdit: Superhero): Observable<Superhero>{
    let index = this.superHerosList.superheroes.findIndex((superhero) => superhero.id === superheroToEdit.id);
    this.superHerosList.superheroes[index] = superheroToEdit;
    return of(superheroToEdit);
  }

  deleteSuperhero(id: number): Observable<Superhero>{
    let index = this.superHerosList.superheroes.findIndex((superhero) => superhero.id === id);
    let superhero = this.superHerosList.superheroes[index];
    this.superHerosList.superheroes.splice(index, 1);
    return of(superhero);
  }

}
