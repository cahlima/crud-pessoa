import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';


const LS_CHAVE: string= "pessoas";

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
  inserir (pessoa: Pessoa): void {
    //Obtém a lista completa de pessoas
    const pessoas = this.listarTodos();
    //Seta o ID unico
    //Para não precisar gerenciar, será usdo o Timestamp
    //Quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();

    //Adiciona no final da lista
    pessoas.push (pessoa);

    //Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorID(id: number): Pessoa | undefined {
    //Obtém lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

  // efetua a busca
  //find() : retorna o primeiro elemento da lista que satisfaz a condição caso contrario, undefined
    return pessoas.find(pessoa=> pessoa.id === id);

    }

  atualizar(pessoa: Pessoa): void {
    // Obtém a lista completa de pessoas
    const pessoas: Pessoa [] = this.listarTodos();

    // varre a lista de pessoas
    //quando encontra a pessoa com o mesmo id, altera a lista
    pessoas.forEach((obj,index,objs)=> {
    if (pessoa.id===obj.id) {
    objs[index] = pessoa;
    }
      });

    //armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }

    remover( id: number): void {
    //Obtem a lista completa de pessoas
    //Feito com let para poder ser alterada
    let pessoas: Pessoa[] = this.listarTodos()
    // filter(): retorna a mesma lista, com os registros que satisfazem,
    // a condição,isto é, cujo id é diferente do passado na função

    pessoas = pessoas.filter(pessoa => pessoa.id!==id);

    //atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }

    }

  

