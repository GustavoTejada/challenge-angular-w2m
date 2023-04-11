import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Superhero, Team} from "../../core/interfaces/superhero.interface";
import {ModalConfirmationComponent} from "../../shared/modal-confirmation/modal-confirmation.component";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  superHeroForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Superhero,
    public dialogRef: MatDialogRef<AddEditComponent>,
    public dialog: MatDialog
  ) {
    this.superHeroForm = new FormGroup({
      id: new FormControl(data.id ? data.id : ''),
      name: new FormControl(data.name ? data.name : '', [Validators.required]),
      alias: new FormControl(data.alias ? data.alias : '', [Validators.required]),
      power: new FormControl(data.power ? data.power : '', [Validators.required]),
      team: new FormControl(data.team ? data.team : '', [Validators.required]),
      first_appearance: new FormControl(data.first_appearance ? data.first_appearance : '', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  onSubmit(){
    let dialogRefConfirmation: MatDialogRef<ModalConfirmationComponent> = this.dialog.open(ModalConfirmationComponent, {
      width: '500px',
      data: {
        title: this.data.id ? 'Edit Superhero' : 'Add Superhero',
        message: this.data.id ? 'Are you sure you want to edit this superhero?' : 'Are you sure you want to add this superhero?',
        confirm: this.data.id ? 'Edit' : 'Add',
        cancel: 'Cancel'
      }
    });

    dialogRefConfirmation.afterClosed().subscribe((result) => {
      if(result){
        this.dialogRef.close(this.superHeroForm.value);
      }
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
