import { Component, OnInit,ViewChild } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { NgForm, NgModel } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute, Route } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
constructor (

  private loginService: LoginService,
  private router: Router,
  private route: ActivatedRoute) {
  

    if (this.loginService.usuarioLogado) {
      this.router.navigate( ["/home"] );
      }
  }
  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
    this.loginService.login(this.login).subscribe((usu) => {
    if (usu != null) {
    this.loginService.usuarioLogado = usu;
    this.loading = false;
    this.router.navigate( ["/home"] );
    }
    else {
    this.message = "Usuário/Senha inválidos.";
    }
    });
    }
    this.loading = false;
    }
  }