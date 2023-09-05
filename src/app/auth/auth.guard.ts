import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { Router, Route } from '@angular/router';


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const usuarioLogado = this.loginService.usuarioLogado;
      let url = state.url;
      if (usuarioLogado) {
      if (route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil)===-1) {
      // Se o perfil do usuário não está no perfil da rota
      // vai para login
      this.router.navigate(['/login'],
      { queryParams: { error: "Proibido o acesso a " + url } });
      return false;
      }
      // em qualquer outro caso, permite o acesso
      return true;
      }
      // Se não está logado, vai para login
      this.router.navigate(['/login'],
      { queryParams: { error: "Deve fazer o login antes de acessar " + url } });
      return false;;
    
    }
    }
  constructor(
    
        private loginService: LoginService,
        private router: Router
  ){ }
        const usuarioLogado = this.loginService.usuarioLogado;
        let url = state.url;
        if (usuarioLogado) {
        if (route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil)===-1) {
        // Se o perfil do usuário não está no perfil da rota
        // vai para login
        this.router.navigate(['/login'],
        { queryParams: { error: "Proibido o acesso a " + url } });
        return false;
        }
        // em qualquer outro caso, permite o acesso
        return true;
        }
        // Se não está logado, vai para login
        this.router.navigate(['/login'],
        { queryParams: { error: "Deve fazer o login antes de acessar " + url } });
      return false;
  


{}
