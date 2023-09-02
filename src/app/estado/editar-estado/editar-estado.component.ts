import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoServiceTsService } from '../services/estado.service.ts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';
import { Estado } from 'src/app/shared/models/estado.model';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  @ViewChild('formEstado') formEstado! : NgForm;
  estado! : Estado;
  

  constructor (

    private estadoService: EstadoServiceTsService,
    private router: Router,
    private route: ActivatedRoute

    ) {}
  ngOnInit(): void {
  // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
  // Operador + (antes do this) converte para número
  let id = +this.route.snapshot.params['id'];
  // Com o id, obtém a estado
  const res = this.estadoService.buscarPorID(id);
    if (res !== undefined)
      this.estado = res;
  else {
    throw new Error ("Estado não encontrada: id = " + id);
  }
}


  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEstado.form.valid) {
    // Efetivamente atualiza a estado
    this.estadoService.atualizar(this.estado);
    // Redireciona para /pessoas/listar
    this.router.navigate(['/estado']);
    }
    }
}

