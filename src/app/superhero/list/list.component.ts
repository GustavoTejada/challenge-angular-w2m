import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {SuperheroService} from "../../services/superhero.service";
import {Superhero} from "../../core/interfaces/superhero.interface";
import {ViewComponent} from "../view/view.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AddEditComponent} from "../add-edit/add-edit.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ModalConfirmationComponent} from "../../shared/modal-confirmation/modal-confirmation.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SuperheroService]
})
export class ListComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  toSearch: string = '';
  listToShow  = new MatTableDataSource<Superhero>( []);
  displayedColumns: string[] = ['id', 'name', 'alias', 'power', 'actions'];

  constructor(
    private superheroService: SuperheroService,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {
    this.getAllSuperheroes();
  }

  ngAfterViewInit() {
    this.listToShow.paginator = this.paginator;
  }
  ngOnInit(): void {}

  getAllSuperheroes(){
    this.superheroService.getAll().subscribe((superheroes) => {
      this.listToShow.data = superheroes;
    })
  }

  searchForName(name: string){
    this.superheroService.searchForSuperheroName(name).subscribe((superheroes) => {
      this.listToShow.data = superheroes;
      this.cd.detectChanges();
    })
  }

  viewSuperhero(id: number){
    this.superheroService.getOne(id).subscribe((superhero) => {
      let dialogRef: MatDialogRef<ViewComponent> = this.dialog.open(ViewComponent, {
        width: '500px',
        data: superhero
      });
    });
  }

  addSuperhero(){
    let dialogRef: MatDialogRef<AddEditComponent> = this.dialog.open(AddEditComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.superheroService.addSuperhero(result).subscribe((superhero) => {
          this._snackBar.open('Superhero added successfully!', 'Close', {
            panelClass: ['success']
          });
          this.getAllSuperheroes();
          this.cd.detectChanges();
        });
      }
    });
  }
  editSuperhero(id: number){
    let selectedHero = this.listToShow.data.find((superhero) => superhero.id === id);
    let dialogRef: MatDialogRef<AddEditComponent> = this.dialog.open(AddEditComponent, {
      width: '500px',
      data: selectedHero,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.superheroService.editSuperhero(result).subscribe((superhero) => {
          this._snackBar.open('Superhero edited successfully!', 'Close', {
            panelClass: ['success']
          });
          this.getAllSuperheroes();
          this.cd.detectChanges();
        });
      }
    });
  }
  deleteSuperhero(id: number){
    let dialogRefConfirmation: MatDialogRef<ModalConfirmationComponent> = this.dialog.open(ModalConfirmationComponent, {
      width: '500px',
      data: {
        title: 'Delete Superhero',
        message: 'Are you sure you want to delete this superhero?',
        confirm: 'Delete',
        cancel: 'Cancel'
      }
    });

    dialogRefConfirmation.afterClosed().subscribe((result) => {
      if(result){
        this.superheroService.deleteSuperhero(id).subscribe((superhero) => {
          this._snackBar.open('Superhero deleted successfully!', 'Close', {
            panelClass: ['success']
          });
          this.getAllSuperheroes();
          this.cd.detectChanges();
        });
      }
    });
  }
}
