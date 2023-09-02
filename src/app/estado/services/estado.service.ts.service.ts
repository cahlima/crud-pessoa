import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
 
const LS_CHAVE: string= "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoServiceTsService {

  constructor() { }

  listarTodos(): Estado [] {
    const estados = localStorage [LS_CHAVE];
    // Precisa de um condicional, pois retorna undefined se a chava nao existe
    return  estados ? JSON.parse(estados) : [];

  }
  inserir (estado: Estado): void {
    //Obtém a lista completa de estados
    const estados = this.listarTodos();
    //Seta o ID unico
    //Para não precisar gerenciar, será usdo o Timestamp
    //Quantidade de segundos desde 1970
    estado.id = new Date().getTime();

    //Adiciona no final da lista
    estados.push (estado);

    //Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorID(id: number): Estado | undefined {
    //Obtém lista completa de cidades
    const cidades: Estado[] = this.listarTodos();

  // efetua a busca
  //find() : retorna o primeiro elemento da lista que satisfaz a condição caso contrario, undefined
    return cidades.find(estado=> estado.id === id);

    }

  atualizar(estado: Estado): void {
    // Obtém a lista completa de cidades
    const cidades: Estado [] = this.listarTodos();

    // varre a lista de cidades
    //quando encontra a estado com o mesmo id, altera a lista
    cidades.forEach((obj,index,objs)=> {
    if (estado.id===obj.id) {
    objs[index] = estado;
    }
      });

    //armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }

    remover( id: number): void {
    //Obtem a lista completa de cidades
    //Feito com let para poder ser alterada
    let cidades: Estado[] = this.listarTodos()
    // filter(): retorna a mesma lista, com os registros que satisfazem,
    // a condição,isto é, cujo id é diferente do passado na função

    cidades = cidades.filter(estado => estado.id!==id);

    //atualiza a lista de cidades
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }

    }

  

