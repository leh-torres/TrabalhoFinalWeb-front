import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username: '',
    password: ''
  }

  title = 'frontend';

  constructor(private snack: MatSnackBar, private login: LoginService) {}

  ngOnInit(): void {
  }


  formSubmit(){
    console.log('console formSubmit')

    if(this.loginData.username.trim() == '' || this.loginData.username ==null){
      this.snack.open('O username não pode ser vazio!', '',{
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

  }
}
