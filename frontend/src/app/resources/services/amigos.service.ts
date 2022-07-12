import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { jsonUsuariosBanco } from '../models/interfaceJsonUsuarios';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})


export class AmigosService {


  private getRetorno:any  = []

  constructor(private httpClient: HttpClient) { }

  amigos(): Observable<Usuarios[]>{

    let temp:any = []
    let email:string = ''
    let password: string = ''

    temp = window.localStorage.getItem('validado')
    
    console.log(temp)
    let res = temp.split(',')
    let part1 = res[0].split('"')
    email = part1[1]
    let part2 = res[1].split('"')
    password = part2[1]
    

    return this.httpClient.get<Usuarios[]>(`http://localhost:8080/api/user/amigos/${email}/${password}` ) 
      .pipe(
        map(
          res => res
        )
      )
      
      
  }
}
