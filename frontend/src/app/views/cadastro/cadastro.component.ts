import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuarios } from 'src/app/resources/models/Usuarios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dadosCadastro={
    nome:'',
    email:'',
    linkImg:'',
    genero:'',
    password:'',
    confirm_password:'',
  }

  opcoesGenero = [
    {id: 0,nome: 'Feminino'},
    {id: 1,nome: 'Masculino'},
    {id: 2,nome: 'Não Binário'},
  ]
    

  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  validar(){
    console.log(this.dadosCadastro.genero)

    if(this.dadosCadastro.password != this.dadosCadastro.confirm_password){
      this.snack.open('Senhas diferentes!', 'Fechar',{
        duration:3000,       
      })
      return 
    }
  }

}
