import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterComponent } from '../register/register.component'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: any;
  firstName: string;
  optionSelected: any = 'informacion';
  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute) { }

  signOut(): void{
    this.authService.signOut().then(response => this.route.navigate(['login']));
    console.log("sirve");
  }
  ngOnInit(): void {
    console.log(this.router.snapshot.queryParams);
    if(this.router.snapshot.queryParams.media === 'fb'){
      this.signInWithFB();
    
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(response => {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.user.firstName;
  });

  }
  


}

