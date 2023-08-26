import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    ListarEnderecoComponent

  ],
  imports: [
    CommonModule,
    RouterLink
  ],

  providers: [
EnderecoService
    
  ]
})
export class EnderecoModule { }
