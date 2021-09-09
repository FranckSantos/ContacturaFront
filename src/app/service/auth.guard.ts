import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router){};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('token') !== null) {
        console.log("logado")
        this.mostrarMenuEmitter.emit(true);
        return true;
       
      } else {
          localStorage.removeItem('token');
          console.log("nao logado")
          this.mostrarMenuEmitter.emit(false);
          this.router.navigate(['/login']);
          return false;
        }
         
    }
  }


@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  
  constructor(private router: Router){};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token') !== null) {
        //&& localStorage.getItem('admin') == 'true') {
          this.mostrarMenuEmitter.emit(true);
          return true;
    
    } else {
      localStorage.removeItem('token');
      console.log("nao logado")
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
