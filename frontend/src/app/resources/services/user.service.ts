import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public addUser(user: Usuarios){
    this.httpClient.post('http://localhost:8080/api/user/cadastrar', user)
     .subscribe(
      data => {
        console.log(data)
      }
     )
      
  }
  

}
