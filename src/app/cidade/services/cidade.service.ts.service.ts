import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';



const LS_CHAVE: string= "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos():Cidade [] {
    const cidades = localStorage [LS_CHAVE];
    // Precisa de um condicional, pois retorna undefined se a chava nao existe
    return  cidades ? JSON.parse(cidades) : [];

  }
  inserir (cidade: Cidade): void {
    //Obtém a lista completa de cidades
    const cidades = this.listarTodos();
    //Seta o ID unico
    //Para não precisar gerenciar, será usdo o Timestamp
    //Quantidade de segundos desde 1970
    cidade.id = new Date().getTime();

    //Adiciona no final da lista
    cidades.push (cidade);

    //Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
  buscarPorID(id: number): Cidade | undefined {
    //Obtém lista completa de cidades
    const cidades: Cidade[] = this.listarTodos();

  // efetua a busca
  //find() : retorna o primeiro elemento da lista que satisfaz a condição caso contrario, undefined
    return cidades.find(cidade=> cidade.id === id);

    }

  atualizar(cidade: Cidade): void {
    // Obtém a lista completa de cidades
    const cidades: Cidade [] = this.listarTodos();

    // varre a lista de cidades
    //quando encontra a cidade com o mesmo id, altera a lista
    cidades.forEach((obj,index,objs)=> {
    if (cidade.id===obj.id) {
    objs[index] = cidade;
    }
      });

    //armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }

    remover( id: number): void {
    //Obtem a lista completa de cidades
    //Feito com let para poder ser alterada
    let cidades: Cidade[] = this.listarTodos()
    // filter(): retorna a mesma lista, com os registros que satisfazem,
    // a condição,isto é, cujo id é diferente do passado na função

    cidades = cidades.filter(cidade => cidade.id!==id);

    //atualiza a lista de cidades
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }

    }

  


