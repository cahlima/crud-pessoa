import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CidadeService } from '../services/cidade.service.ts.service';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';
import { CidadeModule } from '../cidade.module';


@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = []; // Defina a propriedade cidades como um array vazio
  cidade: Cidade | undefined; // Defina a propriedade cidade como undefined (ou null)

  constructor(private cidadeService : CidadeService,
    private modalService: NgbModal) { }
  
  ngOnInit(): void {
      this.cidades = this.listarTodos();

      //abrirModalPessoa(cidade: Cidade) {
       //const modalRef = this.modalService.open(ModalCidadeComponent);
     //  modalRef.componentInstance.cidade = cidade;
  }
  
   
    listarTodos() : Cidade[] {
  return this.cidadeService.listarTodos();
  
    }
    remover($event: any, cidade: Cidade): void {
      $event.preventDefault();
      if (confirm (`Deseja realmente remover este endereço ${cidade.cidade}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos(); 

      }
  }
  }
      // Aqui você pode inicializar a propriedade cidades com os dados obtidos do serviço, por exemplo
    // this.cidades = this.enderecoService.obterEnderecos();
  

  
  


