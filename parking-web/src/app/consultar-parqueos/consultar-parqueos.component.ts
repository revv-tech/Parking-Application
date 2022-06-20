import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import { Funcionario } from '../model/funcionario';
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { FuncionariosService } from '../servicios/funcionarios.service';

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
  encargado:Funcionario;

  constructor(private _servicioParqueo:EstacionamientosService, private _servicioFuncionario:FuncionariosService) {
    this.encargado = _servicioFuncionario.getUsuarioLoggeado();
    this.parqueos=_servicioParqueo.getParqueos().filter((parqueo:Estacionamiento)=> parqueo.encargado == this.encargado.identificacion);
    this.tiposParqueos= Object.values(this.tParqueo) //.filter(value => value != TEstacionamiento.CAMPUS)
    this._servicioParqueo.setParqueoFiltro(this.parqueos)
    }


  ngOnInit(): void {
  }

  filtrarPorTipo = ()=>{
    if(this.tipoParqueo == "Cualquiera"){
      this.parqueos = this._servicioParqueo.getParqueos().filter((parqueo:Estacionamiento)=> parqueo.encargado == this.encargado.identificacion);
    }
    else{
      this.parqueos=this._servicioParqueo.getParqueos().filter((parqueo:Estacionamiento)=> parqueo.encargado == this.encargado.identificacion);
      this.parqueos = this.parqueos.filter((value: any)=>value["tipo"] == this.tipoParqueo)
    }
    this._servicioParqueo.setParqueoFiltro(this.parqueos)
  }

}
