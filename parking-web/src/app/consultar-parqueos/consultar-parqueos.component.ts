import { Component, OnInit } from '@angular/core';
import { EstacionamientosService } from '../servicios/estacionamientos.service';

@Component({
  selector: 'app-consultar-parqueos',
  templateUrl: './consultar-parqueos.component.html',
  styleUrls: ['./consultar-parqueos.component.css']
})
export class ConsultarParqueosComponent implements OnInit {

  parqueos:any=[]

  constructor(private _servicioParqueo:EstacionamientosService) {
    this.parqueos=_servicioParqueo.getParqueos();
   }


  ngOnInit(): void {
  }

}
