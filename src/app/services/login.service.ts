import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi + 'login';
  
  constructor(private http: HttpClient) {
    
   }

   logar(Usuario: Usuario){
     this.http.post<String>(this.urlApi, Usuario).subscribe({

      next: (res) => {
        console.info(res);
        alert('login realizado');
      },

      error: (error) => {
  
        console.info(error);
        alert('Erro no login' + error.console.text);
        
      }

     });
   }
}
