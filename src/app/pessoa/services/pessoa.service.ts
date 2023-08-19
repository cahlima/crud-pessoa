import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos():Pessoa [] {
    const pessoas = localStorage [LS_CHAVE];
    // Precisa de um condicional, pois retorna undefined se a chava nao existe
    return  pessoas ? JSON.parse(pessoas) : [];



  }
}
