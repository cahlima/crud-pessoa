import { Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit{
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;


  constructor (

  private pessoaService: PessoaService,
  private router: Router
) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  Inserir(): void {
      if (this.formPessoa.form.valid) {
          this.pessoaService.inserir(this.pessoa);
          this.router.navigate(["/pessoas"]);

      }

  }
}
