import { Component, OnInit } from '@angular/core';
import { TEstacionamiento } from '../model/estacionamiento';
import { EstacionamientosService } from '../servicios/estacionamientos.service';

@Component({
  selector: 'app-consultar-parqueos',
  templateUrl: './consultar-parqueos.component.html',
  styleUrls: ['./consultar-parqueos.component.css']
})
export class ConsultarParqueosComponent implements OnInit {

  parqueos:any=[]
  tipoParqueo:any = "Cualquiera"
  tiposParqueos:TEstacionamiento[] =[]
  public tParqueo = TEstacionamiento

  constructor(private _servicioParqueo:EstacionamientosService) {
    this.parqueos=_servicioParqueo.getParqueos();
    this.tiposParqueos= Object.values(this.tParqueo) //.filter(value => value != TEstacionamiento.CAMPUS)
    this._servicioParqueo.setParqueoFiltro(this.parqueos)
    }


  ngOnInit(): void {
  }

  filtrarPorTipo = ()=>{
    if(this.tipoParqueo == "Cualquiera"){
      this.parqueos = this._servicioParqueo.getParqueos();
    }
    else{
      this.parqueos=this._servicioParqueo.getParqueos();
      this.parqueos = this.parqueos.filter((value: any)=>value["tipo"] == this.tipoParqueo)
    }
    this._servicioParqueo.setParqueoFiltro(this.parqueos)
  }

}
