import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import {Horario, TDia} from '../model/horario';

@Component({
  selector: 'app-un-estacionamiento',
  templateUrl: './un-estacionamiento.component.html',
  styleUrls: ['./un-estacionamiento.component.css']
})
export class UnEstacionamientoComponent implements OnInit {

  public parqueos:any=[]
  horarioLunes: Horario= new Horario(TDia.LUNES, "01:00", "01:00")
  horarioMarte: Horario=new Horario(TDia.MARTES, "01:00","01:00")
  horarioMierc: Horario=new Horario(TDia.MIERCOLES, "01:00", "01:00")
  horarioJueve: Horario=new Horario(TDia.JUEVES, "01:00", "01:00")
  horarioViern: Horario=new Horario(TDia.VIERNES, "01:00", "01:00")
  horarioSabad: Horario=new Horario(TDia.SABADO, "01:00", "01:00")
  horarioDomin: Horario=new Horario(TDia.DOMINGO, "01:00", "01:00")

  constructor(private ruta:ActivatedRoute, _parqueos:EstacionamientosService) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.parqueos.push(_parqueos.getParqueoSelect(params['id']));
    })
    this.horarioLunes = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.LUNES)[0]
    this.horarioMarte = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.MARTES)[0]
    this.horarioMierc = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.MIERCOLES)[0]
    this.horarioJueve = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.JUEVES)[0]
    this.horarioViern = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.VIERNES)[0]
    this.horarioSabad = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.SABADO)[0]
    this.horarioDomin = this.parqueos[0].horarios.filter((horario:any) => horario["dia"] == TDia.DOMINGO)[0]
    console.log("horario", this.horarioDomin)
  }

  ngOnInit(): void {
  }

}
