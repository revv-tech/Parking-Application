import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EstacionamientosService } from '../servicios/estacionamientos.service';

@Component({
  selector: 'app-un-estacionamiento',
  templateUrl: './un-estacionamiento.component.html',
  styleUrls: ['./un-estacionamiento.component.css']
})
export class UnEstacionamientoComponent implements OnInit {

  public parqueos:any=[]

  constructor(private ruta:ActivatedRoute, _parqueos:EstacionamientosService) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      // this.parqueos.push(_parqueos.getUnParqueo(params['id']));
    })
  }

  ngOnInit(): void {
  }

}
