import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';
import { EnderecoService } from '../services/endereco.service';
import { EnderecoModule } from '../endereco.module';


@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = []; // Defina a propriedade enderecos como um array vazio
  endereco: Endereco | undefined; // Defina a propriedade endereco como undefined (ou null)

  constructor(private enderecoService : EnderecoService,
    private modalService: NgbModal) { }
  
  ngOnInit(): void {
      this.enderecos = this.listarTodos();

      //abrirModalPessoa(pessoa: Pessoa) {
       // const modalRef = this.modalService.open(ModalPessoaComponent);
      //  modalRef.componentInstance.pessoa = pessoa;
  }
  
   
    listarTodos() : Endereco[] {
  return this.enderecoService.listarTodos();
  
    }
    remover($event: any, pessoa: Endereco): void {
      $event.preventDefault();
      if (confirm (`Deseja realmente remover este endereço ${this.endereco.nome}?`)) {
      this.enderecoService.remover(this.Endereco.id!);
      this.enderecos = this.listarTodos();
      }
  }
  }
      // Aqui você pode inicializar a propriedade enderecos com os dados obtidos do serviço, por exemplo
    // this.enderecos = this.enderecoService.obterEnderecos();
  

  
  