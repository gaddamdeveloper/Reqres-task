import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private baseURL="https://reqres.in/api/login";
  constructor(private http:HttpClient) { }
  public login(email:any,password:any){
    return this.http.post(this.baseURL,{email,password});
  }

}
