import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;
  
  constructor(private http: HttpClient) {
    
   }

   logar(Usuario: Usuario){
     this.http.post<String>(this.urlApi + 'login', Usuario).subscribe({

      next: (res) => {
        
        var respJson = JSON.stringify(res);
        var jwt = JSON.parse(respJson);
        localStorage.setItem("Authorization", jwt.Authorization);
       
        
      },

      error: (error) => {
  
        console.info(error);
        alert('Erro no login' + error.console.text);
        
      }

     });
   }

   recuperarSenha(login: String) {

      return this.http.post<String>(this.urlApi + 'recuperarSenha', login).subscribe({

       next: (res) => {

        var respJson = JSON.stringify(res);
        var resposta = JSON.parse(respJson);

        alert(resposta.msg);
       },
      error: (error) => {
        var respJson = JSON.stringify(error);
        var resposta = JSON.parse(respJson);
        alert(resposta.msg);
      }

      });
   }

}
