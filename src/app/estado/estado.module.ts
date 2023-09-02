import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoServiceTsService } from '../estado/services/estado.service.ts.service';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { NgModel } from '@angular/forms';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';



@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent,  
    ModalEstadoComponent
  ],




  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink
  ],

  providers: [
 EstadoServiceTsService
  ]
})


export class EstadoModule {}