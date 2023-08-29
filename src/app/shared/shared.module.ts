import { NgModule } from '@angular/core';
// Diretivas
import { NumericoDirective, MinimoValidatorDirective } from './directives';
// Pipes
import { MeuPipePipe } from './pipes';
import { CommonModule } from '@angular/common';



@NgModule({
declarations: [


MeuPipePipe
],

imports: [

    CommonModule
],

exports: [


MeuPipePipe
]
})
export class SharedModule { }