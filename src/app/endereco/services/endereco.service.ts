import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

listarTodos(): Endereco [] {
    const endereco = localStorage [LS_CHAVE];
    // Precisa de um condicional, pois retorna undefined se a chava nao existe
    return  endereco ? JSON.parse(endereco) : [];

  }

inserir ( novoEndereco: Endereco): void {

  //Obtém a lista completa de endereços
  const endereco = this.listarTodos();

  //Seta o ID unico
  //Para não precisar gerenciar, será usdo o Timestamp
  //Quantidade de segundos desde 1970
  novoEndereco.id = new Date().getTime();

  //Adiciona no final da lista
  endereco.push (novoEndereco);

  //Armazena no Local Storage
  localStorage[LS_CHAVE] = JSON.stringify(novoEndereco);
}

buscarPorID(id: number): Endereco | undefined {

  //Obtém lista completa de endeeços
  const enderecos: Endereco[] = this.listarTodos();

// efetua a busca
//find() : retorna o primeiro elemento da lista que satisfaz a condição caso contrario, undefined
  return enderecos.find ( endereco  => endereco.id === id);

  }

  atualizar(enderecoAtualizado: Endereco): void {
    let enderecos: Endereco[] = this.listarTodos();

    const index = enderecos.findIndex(e => e.id === enderecoAtualizado.id);
    if (index !== -1) {
      enderecos[index] = enderecoAtualizado;
      localStorage.setItem(LS_CHAVE, JSON.stringify(enderecos));
    }
  }

  remover( id: number): void {

  //Obtem a lista completa de endereços
  //Feito com let para poder ser alterada
  let enderecos: Endereco[] = this.listarTodos()
  // filter(): retorna a mesma lista, com os registros que satisfazem,
  // a condição,isto é, cujo id é diferente do passado na função

  enderecos = enderecos.filter(endereco => endereco.id!==id);

  //atualiza a lista de pessoas
  localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  }




