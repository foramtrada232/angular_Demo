import { Injectable } from '@angular/core';
import { config } from './config';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  authorize(detail) {
    return this.http.post(config.baseApiUrl + 'login',detail);
  }

  sendToken(detail) {
    localStorage.setItem('users',detail)
  }

  getToken(){
    return localStorage.getItem('users')
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }
}

  
  