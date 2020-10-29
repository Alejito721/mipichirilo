import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { InicioComponent } from './inicio/inicio.component';
import { InicioGuard } from './inicio/inicio.guard';

const config = new AuthServiceConfig([
  {
   id: FacebookLoginProvider.PROVIDER_ID,
   provider: new FacebookLoginProvider('697701760791342')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('317452562388-rjce6ojvda7frn8gdpij7m94s8ia5pf6.apps.googleusercontent.com')
  }
 ]);

 export function provideConfig() {
  return config;
 }
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
     },
    InicioGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
