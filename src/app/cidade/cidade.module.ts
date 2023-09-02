import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeService } from './services/cidade.service.ts.service';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule, NgForm, NgModel} from '@angular/forms';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent,
    ModalCidadeComponent
    
  ],


  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink,
    NgSelectModule
  ],

  providers: [

    CidadeService
      
  
  ]
})
export class CidadeModule { }