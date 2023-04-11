import {TestBed} from '@angular/core/testing';

import {SuperheroService} from './superhero.service';
import {Team} from "../core/interfaces/superhero.interface";

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of superheroes', () => {
    service.getAll().subscribe((superheroes) => {
      expect(superheroes).toBeTruthy();
    })
  } );

  it('should return a list of superheroes with the name searched', () => {
    service.searchForSuperheroName('batman').subscribe((superheroes) => {
      expect(superheroes).toBeTruthy();
    })
  });

  it('should delete a superhero', () => {
    service.deleteSuperhero(1).subscribe((superheroes) => {
      expect(superheroes).toBeTruthy();
    })
  });

  it('should add a superhero', () => {
    service.addSuperhero({
      id: 20,
      name: 'Batman',
      alias: 'Bruce Wayne',
      power: 'Rich',
      team: Team.Avengers,
      first_appearance: '1939-05-01',
    }).subscribe((superheroes) => {
      expect(superheroes).toBeTruthy();
    })
  });

  it('should update a superhero', () => {
    service.editSuperhero({
      id: 2,
      name: 'Batman',
      alias: 'Bruce Wayne',
      power: 'Rich',
      team: Team.JusticeLeague,
      first_appearance: '1939-05-01',
    }).subscribe((superheroes) => {
      expect(superheroes).toBeTruthy();
    })
  });
});
