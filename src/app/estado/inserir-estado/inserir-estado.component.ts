import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoServiceTsService } from '../services/estado.service.ts.service';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared/models/estado.model';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})


export class InserirEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado! : NgForm;
  estado: Estado = new Estado(); // Crie um novo objeto Estado
  sigla: string = '';
  


  constructor (

  private estadoService: EstadoServiceTsService,
  private router: Router) {}

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserir(): void {
      if (this.formEstado.form.valid) {
          this.estadoService.inserir(this.estado);
          this.router.navigate(["/estado"]);

      }

  }

}
