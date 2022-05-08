import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { ConsultarParqueosComponent } from './consultar-parqueos/consultar-parqueos.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { GestorEstacionamientoComponent } from './gestor-estacionamiento/gestor-estacionamiento.component';
import { LoginComponent } from './login/login.component';
import { UnEstacionamientoComponent } from './un-estacionamiento/un-estacionamiento.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cambiar-contrasena', component: CambiarContrasenaComponent },
  { path: 'consultar-parqueos', component: ConsultarParqueosComponent },
  { path: 'un-estacionamiento/:id', component: UnEstacionamientoComponent },
  { path: 'editar-funcionario', component: EditarFuncionarioComponent },
  { path: 'editar-cuenta', component: EditarCuentaComponent },
  { path: 'manageParking', component: GestorEstacionamientoComponent },
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
