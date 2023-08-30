import { Component, OnInit} from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { ViewChild } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { ActivatedRoute, Router, Route} from '@angular/router';



@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  @ViewChild('formEndereco') formEndereco! : NgForm;
  endereco! : Endereco;

  constructor (
    private enderecoService: EnderecoService,
    private router: Router,
    private route : ActivatedRoute
  
  ){}

    
  ngOnInit (): void {
  
    let id = +this.route.snapshot.params['id'];
  // Com o id, obtém a pessoa
  const res = this.enderecoService.buscarPorID(id);
    if (res !== undefined)
      this.endereco = res;
  else {
    throw new Error ("Pessoa não encontrada: id = " + id);
  }
}


  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEndereco.form.valid) {
    // Efetivamente atualiza a pessoa
    this.enderecoService.atualizar(this.endereco);
    // Redireciona para /pessoas/listar
    this.router.navigate(['/pessoas']);
    }
    }
}