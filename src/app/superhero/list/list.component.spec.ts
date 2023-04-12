import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from "@angular/material/snack-bar";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [{ provide: MatDialog, useValue: {} },{ provide: MatSnackBar, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: [] }, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of superheroes', () => {
    component.getAllSuperheroes();
    expect(component.listToShow.data).toBeTruthy();
  });

  it('should return a list of superheroes with the name searched', () => {
    component.searchForName('batman');
    expect(component.listToShow.data).toBeTruthy();
  });

});
