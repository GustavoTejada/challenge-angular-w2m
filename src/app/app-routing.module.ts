import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./superhero/list/list.component";
import {AddEditComponent} from "./superhero/add-edit/add-edit.component";

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'add-edit',
    component: AddEditComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
