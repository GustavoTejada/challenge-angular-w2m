import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponent } from './add-edit.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from "@angular/material/snack-bar";

describe('AddEditComponent', () => {
  let component: AddEditComponent;
  let fixture: ComponentFixture<AddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditComponent ],
      providers: [{provide: MatDialogRef, useValue: {}}, { provide: MatDialog, useValue: {} },{ provide: MatSnackBar, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: [] }, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form', () => {
    component.ngOnInit();
    expect(component.superHeroForm).toBeTruthy();
  });

  // test validators

  it('should return a required error', () => {
    component.ngOnInit();
    expect(component.superHeroForm.controls['name'].errors?.['required']).toBeTruthy();
  });

});
