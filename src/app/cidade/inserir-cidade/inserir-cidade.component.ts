import { Component, OnInit, ViewChild} from '@angular/core';
import { CidadeService } from '../services/cidade.service.ts.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { NgModel } from '@angular/forms';
import { Estado } from 'src/app/shared';
import { EstadoServiceTsService } from 'src/app/estado/services/estado.service.ts.service';


@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild ('formCidade') formCidade! : NgForm;
  cidade! : Cidade;
  estados: Estado[] = [];


  constructor (

  private cidadeService: CidadeService,
  private estadoService: EstadoService,
  private router: Router) {}

  ngOnInit(): void {
    this.cidade = new Cidade();
    this.estados = this.estadoService.listarTodos();
  }

  inserir(): void {
      if (this.formCidade.form.valid) {
          this.cidadeService.inserir(this.cidade);
          this.router.navigate(["/cidade"]);

      }

  }

}
