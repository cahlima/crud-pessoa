import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { MinimoValidatorDirective } from '../shared/directives/minimo-validator.directive';
import { NgModel } from '@angular/forms';
import { SharedModule } from '../shared';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';



@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    NumericoDirective,
    MinimoValidatorDirective,
    ModalPessoaComponent,

  
  ],


  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink
     ],


  providers: [

    PessoaService
  ]
})
export class PessoaModule { }


