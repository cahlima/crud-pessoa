import { Component, OnInit, ViewChild } from '@angular/core';
import { CidadeService } from '../services/cidade.service.ts.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { EstadoServiceTsService } from 'src/app/estado/services/estado.service.ts.service'; 
import { EstadoModule } from 'src/app/estado/estado.module';


@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {



  @ViewChild('formCidade') formCidade! : NgForm;
  cidade! : Cidade;
  estado: Estado[] = [];

  constructor (

    private cidadeService: CidadeService,
    private router: Router,
    private route: ActivatedRoute,
    private estadoService: EstadoServiceTsService

    ) {}
  ngOnInit(): void {
  // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
  // Operador + (antes do this) converte para número
  let id = +this.route.snapshot.params['id'];
  // Com o id, obtém a cidade
  const res = this.cidadeService.buscarPorID(id);
    if (res !== undefined)
      this.cidade = res;
  else {
    throw new Error ("Cidade não encontrada: id = " + id);
  }
}


  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formCidade.form.valid) {
    // Efetivamente atualiza a cidade
    this.cidadeService.atualizar(this.cidade);
    // Redireciona para /pessoas/listar
    this.router.navigate(['/pessoas']);
    }
    }
}
import { Estado } from 'src/app/shared';

