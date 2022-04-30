import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   public getAllUsers(){
     return this.http.get("https://reqres.in/api/QpwL5tke4Pnpja7X4");
   }
}
