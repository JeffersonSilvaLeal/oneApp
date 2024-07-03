import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tituloLogin = 'oneApp';

  constructor (private fb: FormBuilder, private LoginService: LoginService){

  }

  /** Obter dados do fomulário */
  loginForm = this.fb.group({

    login: [null, Validators.required],
    senha: [null, Validators.required]
  });

  /**Passar para o objeto */
  loginObjeto(): Usuario {
    return{
      login: this.loginForm.get('login')?.value!,
      senha: this.loginForm.get('senha')?.value!
    }
  }

  fazerLogin() {
    const usuario = this.loginObjeto();

    this.LoginService.logar(usuario)
    console.info('email -> ' + usuario.login);
    console.info('senha -> ' + usuario.senha);
  }

  recuperarSenha() {

    const usuario = this.loginObjeto();

    var login = usuario.login;

    if (login == ''){
      alert('Informe o login para recuperar a senha');    
    }else{
      this.LoginService.recuperarSenha(login);
    }
  }
}
