import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarParqueosComponent } from './consultar-parqueos/consultar-parqueos.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GestorEstacionamientoComponent } from './gestor-estacionamiento/gestor-estacionamiento.component';
import { LoginComponent } from './login/login.component';
import { UnEstacionamientoComponent } from './un-estacionamiento/un-estacionamiento.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consultar-parqueos', component: ConsultarParqueosComponent },
  { path: 'un-estacionamiento/:id', component: UnEstacionamientoComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'manageParking', component: GestorEstacionamientoComponent },
  { path: '', component: LoginComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
