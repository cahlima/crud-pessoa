import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { NumericoDirective } from './shared/directives/numerico.directive';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { CidadeModule } from './cidade/cidade.module';
import { EstadoModule } from './estado/estado.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { LoginService } from './auth/services/login.service';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    NgbModule, 
    FormsModule,
    NgSelectModule,
    AuthModule,
  ],


  providers: [LoginService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
