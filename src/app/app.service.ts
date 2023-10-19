import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  public sendDataToBackend(formData: any) {
    return this.http.post('http://localhost:8080/login', formData);
  }
  // @ts-ignore




}


