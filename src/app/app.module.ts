import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {RouterModule, RouterOutlet} from '@angular/router';

import { AppComponent } from './app.component';
import { CreatEmployeeComponent } from './components/creat-employee/creat-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {CheckboxModule} from "primeng/checkbox";
import { PasswordModule } from "primeng/password";
@NgModule({
  declarations: [
    AppComponent,
    CreatEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    RouterOutlet,
    CheckboxModule,
    PasswordModule,
    ReactiveFormsModule

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
