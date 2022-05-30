import { Component, OnInit } from '@angular/core';
import { TEstacionamiento } from '../model/estacionamiento';
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-gestorreservas',
  templateUrl: './gestorreservas.component.html',
  styleUrls: ['./gestorreservas.component.css']
})
export class GestorreservasComponent implements OnInit {
  parqueos:any=[]
  tipoParqueo:any = "Cualquiera"
  tiposParqueos:TEstacionamiento[] =[]
  public tParqueo = TEstacionamiento
  
  constructor(private _servicioEstacionamiento:EstacionamientosService, public _servicioFuncionario : FuncionariosService ) {
    this.parqueos=_servicioEstacionamiento.getParqueos();
    this.tiposParqueos= Object.values(this.tParqueo) //.filter(value => value != TEstacionamiento.CAMPUS)
    
   }

  ngOnInit(): void {
  }

}
