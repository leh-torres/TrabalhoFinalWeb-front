import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Router, RouterEvent } from '@angular/router';
import { find, map } from 'rxjs';
import { Usuarios } from 'src/app/resources/models/Usuarios';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    email: '',
    password: ''
  }

  userLogin = new Usuarios()
  title = 'frontend';

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
  }


  formSubmit(){
    console.log('console formSubmit')

    if(this.loginData.email.trim() == '' || this.loginData.email ==null){
      this.snack.open('O email não pode ser vazio!', '',{
        duration:3000,       
      })
      return
    }

    if(this.loginData.password.trim() == '' || this.loginData.password ==null){
      this.snack.open('A senha não pode ser vazio!', '',{
        duration:3000,       
      })
      return
    }

    this.userLogin.email = this.loginData.email
    this.userLogin.password = this.loginData.password

    this.loginService.validaUser(this.userLogin)

    if(window.localStorage.key(0) == 'invalidado'){
      this.snack.open('Usuário não cadastrado', 'Voltar',{
        duration:3000,       
      })    
      return
    }
    if(window.localStorage.key(0) == 'validado'){
      this.router.navigate(['home'])
    }
   
    
  }
}
