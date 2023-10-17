import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: '', ,component: LoginComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ]
})
export class AppRoutingModule { }
