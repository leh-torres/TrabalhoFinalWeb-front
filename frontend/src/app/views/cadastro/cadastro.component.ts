import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DadosCadastro } from 'src/app/resources/models/Dadoscadastro';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup

  constructor(private snack: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm(new DadosCadastro())
  }

  creatForm(dadosCadastro: DadosCadastro){
    this.formCadastro = this.formBuilder.group({
      nome: [dadosCadastro.nome],
      email: [dadosCadastro.email],
      img: [dadosCadastro.linkImg],
      genero: [dadosCadastro.genero],
      senha: [dadosCadastro.password],
      confirmSenha: [dadosCadastro.confirm_password]
    })
  }

  onSubmit(){
    console.log(this.formCadastro.value)
    this.formCadastro.reset(new DadosCadastro())
  }

}
