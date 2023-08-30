import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { NgModel } from '@angular/forms';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    ModalEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule
  ],

  providers: [
EnderecoService
    
  ]
})
export class EnderecoModule { }

