import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public addUser(user: Usuarios){
    return this.httpClient.post<Usuarios>(`http://localhost:8080/api/user/cadastrar`, user)
  }
  
}
