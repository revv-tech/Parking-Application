import { Component, OnInit } from '@angular/core';
import { TEstacionamiento } from '../model/estacionamiento';
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { FuncionariosService } from '../servicios/funcionarios.service';
import AOS from 'aos'

@Component({
  selector: 'app-gestor-reservas',
  templateUrl: './gestor-reservas.component.html',
  styleUrls: ['./gestor-reservas.component.css']
})
export class GestorReservasComponent implements OnInit {
  parqueos:any=[]
  tipoParqueo:any = "Cualquiera"
  tiposParqueos:TEstacionamiento[] =[]
  public tParqueo = TEstacionamiento
  
  constructor(private _servicioEstacionamiento:EstacionamientosService, public _servicioFuncionario : FuncionariosService ) {
    this.parqueos=_servicioEstacionamiento.getParqueos();
    this.tiposParqueos= Object.values(this.tParqueo) //.filter(value => value != TEstacionamiento.CAMPUS)
    
   }

  ngOnInit(): void {
    AOS.init();
  }

}
