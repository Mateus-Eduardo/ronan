import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listaUsuarios: Usuario[] = [];
  private url = '  http://localhost:3000/usuarios';

  // Criar uma instancia do httpClient
  constructor(private http: HttpClient) { }

  // aqui vai os métodos do crud

  // o Read é sempre composto por 2 métodos:

  // 1° Traz todos os registros do Banco de Dados
  public getAll(){
    // Retorna o resultado da conexão com a URL da API
    return this.http.get(this.url);
  }

  // 2 trás os dados de apenas 1 regitro 
  public getOne(id: number){
    return this.http.get(`${this.url}/${id} `);
  }


}
