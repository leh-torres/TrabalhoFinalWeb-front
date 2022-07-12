import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ChatComponent } from './views/chat/chat.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'home', component: HomeComponent},
  {path:'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
