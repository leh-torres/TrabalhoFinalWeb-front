import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { strings } from '@material/snackbar';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

 validaUser(user: Usuarios){
    let key = 'validado'
    let key2 = 'invalidado'
    
    this.httpClient.post('http://localhost:8080/api/user/login', user)
      .subscribe(
        data => {
          console.log(data)
          window.localStorage.clear()
          if(data == true){
            window.localStorage.setItem(key, user.email)
          } 
          if(data == false){
            window.localStorage.setItem(key2, user.email)
          }
        }
      )
    

  }
}
