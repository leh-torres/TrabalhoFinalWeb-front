import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResposeLogin } from '../models/ResposeLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient) { }

  public Entrar(requestLogin: RequestLogin): Observable<ResposeLogin>{
    console.log(requestLogin)
    return this.httpClient.post<ResposeLogin>('http://localhost:8080/api/login', requestLogin)
 
  }
}
