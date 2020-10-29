import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GoogleLoginProvider, AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class InicioGuard implements CanActivate {
    
    inicioResolve: boolean = false;
    constructor(private authService: AuthService) { }
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
          console.log(next);
          console.log(state);
          if(next.queryParams.media === 'ggle'){
            this.signInWithGoogle();
        }
        else if(next.queryParams.media === 'fb'){
            this.signInWithFB();
        }
        else{
            return true;
        }
        return this.inicioResolve;
    }

    signInWithGoogle(): void {
        console.log("enter")
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(response => {
        //this.user = JSON.parse(localStorage.getItem('user'));
        //this.firstName = this.user.firstName;
        this.inicioResolve = true;
        console.log(response);

      }).catch(e =>{
          console.log(e);
      })}

      signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(response => {
        //this.user = JSON.parse(localStorage.getItem('user'));
        //this.firstName = this.user.firstName;
        this.inicioResolve = true;
        console.log(response);

      });}
}
