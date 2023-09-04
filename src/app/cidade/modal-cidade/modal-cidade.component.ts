import { Component, OnInit, Input } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Estado } from 'src/app/shared';

@Component({
  selector: 'app-modal-cidade',
  templateUrl: './modal-cidade.component.html',
  styleUrls: ['./modal-cidade.component.css']
})
export class ModalCidadeComponent {

  @Input() cidade!: Cidade;

  
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  }
  }


