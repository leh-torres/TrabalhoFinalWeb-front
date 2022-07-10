import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario={
    email: '',
    password: ''
  }

  title = 'frontend';

  Entrar(){
    console.log("ENTROUUU")
  }
}
