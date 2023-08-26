import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';


@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = []; // Defina a propriedade enderecos como um array vazio
  endereco: Endereco | undefined; // Defina a propriedade endereco como undefined (ou null)

  constructor() { }

  ngOnInit(): void {
    // Aqui você pode inicializar a propriedade enderecos com os dados obtidos do serviço, por exemplo
    // this.enderecos = this.enderecoService.obterEnderecos();
  }
}{

}
