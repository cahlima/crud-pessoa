import { Component, OnInit} from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstadoServiceTsService } from '../services/estado.service.ts.service';
import { EstadoModule } from '../estado.module';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = []; // Defina a propriedade estados como um array vazio
  estado: Estado | undefined; // Defina a propriedade estado como undefined (ou null)

  constructor(private estadoService : EstadoServiceTsService,
    private modalService: NgbModal) { }
  
  ngOnInit(): void {
      this.estados = this.listarTodos();

      //abrirModalEstado (estado: Estado) {
      //const modalRef = this.modalService.open(ModalEstadoComponent);
      //modalRef.componentInstance.estado= estado;
  }
  
   
    listarTodos() : Estado[] {
  return this.estadoService.listarTodos();
  
    }
    remover($event: any, estado: Estado): void {
      $event.preventDefault();
      if (confirm (`Deseja realmente remover este endereço ${estado.estado}?`)) {
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos(); 

      }
  }
  }
      // Aqui você pode inicializar a propriedade estados com os dados obtidos do serviço, por exemplo
    // this.estados = this.enderecoService.obterEnderecos();
  

  
  


