import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Superhero} from "../../core/interfaces/superhero.interface";

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : {title: string, message: string, confirm: string, cancel: string},
    public dialogRef: MatDialogRef<ModalConfirmationComponent>
  ) { }
  ngOnInit(): void {}

  onCancel(){
    this.dialogRef.close(false);
  }
  onConfirm(){
    this.dialogRef.close(true);
  }

}
