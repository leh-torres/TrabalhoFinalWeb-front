import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  title = 'frontend';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public Entrar(): void{
    this.loginService.Entrar(this.requestLogin).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )}


}
