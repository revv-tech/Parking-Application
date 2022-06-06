// Para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import agregado para solicitar info de los form
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

//servicios
import { EstacionamientosService } from './servicios/estacionamientos.service';

//otros
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { GestorEstacionamientoComponent } from './gestor-estacionamiento/gestor-estacionamiento.component';
import { ConsultarParqueosComponent } from './consultar-parqueos/consultar-parqueos.component';
import { UnEstacionamientoComponent } from './un-estacionamiento/un-estacionamiento.component';
import { FuncionariosService } from './servicios/funcionarios.service';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { GlobalsComponent } from './globals/globals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestorFuncionariosComponent } from './gestor-funcionarios/gestor-funcionarios.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { GestorreservasComponent } from './gestorreservas/gestorreservas.component';
import { UnFuncionarioComponent } from './un-funcionario/un-funcionario.component';

// Nueva ruta agregada
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consultar-parqueos', component: ConsultarParqueosComponent },
  { path: 'un-estacionamiento/:id', component: UnEstacionamientoComponent },
  { path: 'un-funcionario/:id', component: UnFuncionarioComponent },
  { path: 'editar-cuenta', component: EditarCuentaComponent },
  { path: 'cambiar-contrasena', component: CambiarContrasenaComponent },
  { path: 'editar-funcionario', component: EditarFuncionarioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manageParking', component: GestorEstacionamientoComponent },
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/login', pathMatch:'full' },
  { path: 'consultar-parqueos/:tipo', component: ConsultarParqueosComponent },
  { path: 'gestorFuncionarios', component: GestorEstacionamientoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    GestorEstacionamientoComponent,
    ConsultarParqueosComponent,
    UnEstacionamientoComponent,
    EditarCuentaComponent,
    EditarFuncionarioComponent,
    CambiarContrasenaComponent,
    DashboardComponent,
    GestorFuncionariosComponent,
    ConsultaFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EstacionamientosService,
    FuncionariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
