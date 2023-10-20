import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  // @ts-ignore
  username;
  // @ts-ignore
  password;
  // @ts-ignore
  myForm;
  constructor(private fb: FormBuilder, private apiService: AppService) {}

  // public credentials={username:'',password:''}

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(""),
      password : new FormControl("")
    });
  }
  public onLogin(data: any){
    console.log(data)
    this.apiService.sendDataToBackend(data)

      .subscribe(response => {
        console.log('Response from Spring backend:', response);
      });
  }
}

