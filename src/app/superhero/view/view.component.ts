import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Superhero} from "../../core/interfaces/superhero.interface";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Superhero,
              public dialogRef: MatDialogRef<ViewComponent>
  ) { }
  ngOnInit(): void {}

  closeDialog(){
    this.dialogRef.close();
  }
}
