import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {

  encontrado: boolean=false;
  id:String="";
  listaFuncionarios:any[]=[]
  listaFuncionarios2:any[]=[]
  funcionario: any={}

  constructor(private _servicioUsuario:FuncionariosService) {
    this.listaFuncionarios = _servicioUsuario.getFuncionarios();
    this.listaFuncionarios2 = this.listaFuncionarios
    _servicioUsuario.setFuncionarioFiltro(this.listaFuncionarios2)
   }

  ngOnInit(): void {
  }

  buscar = async () => {
    this.listaFuncionarios = this.listaFuncionarios2.filter((val) => val["identificacion"].toString().includes(this.id))
    this._servicioUsuario.setFuncionarioFiltro(this.listaFuncionarios)
  }

}
