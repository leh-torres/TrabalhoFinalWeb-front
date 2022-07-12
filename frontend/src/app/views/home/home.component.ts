import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuarios } from 'src/app/resources/models/Usuarios';
import { AmigosService } from 'src/app/resources/services/amigos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Usuarios[] = []

  constructor(private router: Router, private amigosService: AmigosService) { }

  ngOnInit(): void {
   this.recuperaListaDeAmigos()
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate([''])
  }

  recuperaListaDeAmigos(){
    this.amigosService.amigos().subscribe(
      res => {
        this.users = res
        console.log('Users', this.users)
      }
      
    )
  }
}
