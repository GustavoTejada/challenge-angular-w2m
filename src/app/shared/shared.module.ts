import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ModalConfirmationComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class SharedModule { }
