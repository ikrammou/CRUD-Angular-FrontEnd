import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private fb: FormBuilder, private apiService: AppService) {}

  public credentials={username:'',password:''}
  myForm: any;

  public onLogin(){
    const formData = this.myForm.value;
    this.apiService.sendDataToBackend(formData)

      .subscribe(response => {
        console.log('Response from Spring backend:', response);
      });
  }
}

