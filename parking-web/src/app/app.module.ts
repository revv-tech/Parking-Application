// Para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import agregado para solicitar info de los form
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { GestorEstacionamientoComponent } from './gestor-estacionamiento/gestor-estacionamiento.component';

// Nueva ruta agregada
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'manageParking', component: GestorEstacionamientoComponent },
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/login', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    GestorEstacionamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
