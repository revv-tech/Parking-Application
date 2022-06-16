import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-un-funcionario',
  templateUrl: './un-funcionario.component.html',
  styleUrls: ['./un-funcionario.component.css']
})
export class UnFuncionarioComponent implements OnInit {
  departamentoSelect:any
  departamentos:any=[]
  funcionario:Funcionario={identificacion:0, nombreCompleto:"",codigo:"",correoAlterno:"",correoInstitucional:"",necesidadEspecial:false,vehiculos:[],
                          tipoUsuario:TUsuario.COMUN, tipo:TFuncionario.DOCENTE, contrasena:"",campus:TCampus.SAN_JOSE,celular:"", horarios:[],esJefatura:false};
  

  constructor(private ruta:ActivatedRoute, public _servicioUsuario:FuncionariosService) {
    this.ruta.params.subscribe(params=>{
      this.funcionario = (_servicioUsuario.getFuncionarioSelect(params['id']));
    })

  }
  ngOnInit(): void {
    this.departamentos = this._servicioUsuario.getDepartamentos()["lista"];
    this.departamentoSelect = this.getDepartamento(this.funcionario.codigo)
  }


  getDepartamento(codigo:any):any{
    return this.departamentos.filter((dep:any) => dep["codigo"] == codigo)[0]["descripcion"]
  }

  getCodigo(departamentoSelect: any): any {
    return this.departamentos.filter((dep:any) => dep["descripcion"] == departamentoSelect)[0]["codigo"]
  }

}
