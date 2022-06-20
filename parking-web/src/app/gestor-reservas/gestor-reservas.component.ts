import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { FuncionariosService } from '../servicios/funcionarios.service';
import AOS from 'aos'
import { Funcionario, TFuncionario, TUsuario } from '../model/funcionario';
import { Horario } from '../model/horario';
import { EReserva, Reserva } from '../model/reserva';
import { Observable } from 'rxjs';
import { Fecha } from '../model/fecha';
import { Espacio, TEspacio } from '../model/espacio';

@Component({
  selector: 'app-gestor-reservas',
  templateUrl: './gestor-reservas.component.html',
  styleUrls: ['./gestor-reservas.component.css']
})
export class GestorReservasComponent implements OnInit {
  parqueos:Estacionamiento[]=[]
  fechaReserva:String;
  inicioReserva:String="00:00";
  finReserva:String="23:59"
  parqueosReservados:Estacionamiento[]=[]
  tipoParqueo:any = "Cualquiera"
  tiposParqueos:TEstacionamiento[] =[]
  fechaSimulada:Fecha;
  usuario:Funcionario;
  parqueosDisponibles:Estacionamiento[] = [];
  reservas: Reserva[]=[]
  linkImagen:String="./assets/unselect.jpg"
  espacioReservado!:number;
  parqueoSelect!:Estacionamiento
  placaSelect:String=""
  public tParqueo = TEstacionamiento
  
  constructor(private _servicioEstacionamiento:EstacionamientosService, public _servicioFuncionario : FuncionariosService ) {
    this.usuario = _servicioFuncionario.getUsuarioLoggeado();
    this.parqueos=_servicioEstacionamiento.getParqueos();
    this.tiposParqueos= Object.values(this.tParqueo) //.filter(value => value != TEstacionamiento.CAMPUS)
    this.fechaSimulada=_servicioFuncionario.getFechaSimulada();
    this.fechaSimulada.anio = this.fechaSimulada.año
    this.fechaReserva = this.fechaSimulada.anio+"-"+this.fechaSimulada.mes+"-"+this.fechaSimulada.dia
    this.reservas = this.usuario.reservas
    this.usuario.reservas.forEach((reserva)=>{
      reserva.horarioFin.anio = reserva.horarioFin.año
      // reserva.horarioInicio.anio = reserva.horarioInicio.año
      if(parseInt(reserva.horarioFin.año) < parseInt(this.fechaSimulada.año) 
      ||(parseInt(reserva.horarioFin.año) == parseInt(this.fechaSimulada.año) && parseInt(reserva.horarioFin.mes) < parseInt(this.fechaSimulada.mes))
      ||(parseInt(reserva.horarioFin.año) == parseInt(this.fechaSimulada.año) && parseInt(reserva.horarioFin.mes) == parseInt(this.fechaSimulada.mes) &&  parseInt(reserva.horarioFin.dia) < parseInt(this.fechaSimulada.dia))
      ||(parseInt(reserva.horarioFin.año) == parseInt(this.fechaSimulada.año) && parseInt(reserva.horarioFin.mes) == parseInt(this.fechaSimulada.mes) &&  parseInt(reserva.horarioFin.dia) == parseInt(this.fechaSimulada.dia) && parseInt(reserva.horarioFin.hora.slice(0,2)) < parseInt(this.fechaSimulada.hora.slice(0,2)))
      ||(parseInt(reserva.horarioFin.año) == parseInt(this.fechaSimulada.año) && parseInt(reserva.horarioFin.mes) == parseInt(this.fechaSimulada.mes) &&  parseInt(reserva.horarioFin.dia) == parseInt(this.fechaSimulada.dia) && parseInt(reserva.horarioFin.hora.slice(0,2)) == parseInt(this.fechaSimulada.hora.slice(0,2)) && parseInt(reserva.horarioFin.hora.slice(3,5)) < parseInt(this.fechaSimulada.hora.slice(3,5)))
      ){
        reserva.estado = EReserva.VENCIDA
      }
      else{
        reserva.estado = EReserva.VIGENTE
      }
    })
    this.parqueos.forEach((parqueo:Estacionamiento) => {
      parqueo.horarios.forEach((fecha:Horario)=>{
        this.usuario.horarios.forEach((fechaUsuario:Horario)=>{
          if(fechaUsuario.dia == fecha.dia && !this.parqueosDisponibles.includes(parqueo)){
            this.parqueosDisponibles.push(parqueo)
          }
        })
      })
    })
    this.puestosDisponibles();
   }

  ngOnInit(): void {
    AOS.init();
  }

  seleccionado(parqueo:Estacionamiento){
    this.parqueosDisponibles.forEach((parqueo)=>{
      parqueo.seleccionado = false
    })
    parqueo.seleccionado = true
  }
  
  puestosDisponibles() {
    if (this.usuario.esJefatura){
      if (this.usuario.necesidadEspecial){
        this.parqueosDisponibles.forEach((parqueo:Estacionamiento)=>{
          let especialesDisponibles = parqueo.espacios.filter((espacio:Espacio)=>espacio.tipo== TEspacio.ESPECIAL && !espacio.reservado).length
          parqueo.espaciosDisponibles = especialesDisponibles
        })
      }
      else{
        this.parqueosDisponibles.forEach((parqueo:Estacionamiento)=>{
          let jefaturaDisponibles = parqueo.espacios.filter((espacio:Espacio)=>espacio.tipo== TEspacio.JEFATURA && !espacio.reservado ).length
          parqueo.espaciosDisponibles = jefaturaDisponibles
        })
      }
    }
    else{
      if (this.usuario.necesidadEspecial){
        this.parqueosDisponibles.forEach((parqueo:Estacionamiento)=>{
          let especialesDisponibles = parqueo.espacios.filter((espacio:Espacio)=>espacio.tipo== TEspacio.ESPECIAL && !espacio.reservado).length
          parqueo.espaciosDisponibles = especialesDisponibles
        })
      }
      else{
        this.parqueosDisponibles.forEach((parqueo:Estacionamiento)=>{
          let comunesDisponibles = parqueo.espacios.filter((espacio:Espacio)=>espacio.tipo== TEspacio.COMUN && !espacio.reservado).length
          parqueo.espaciosDisponibles = comunesDisponibles
        })
      }
    }
    this.parqueosDisponibles.forEach((parqueo)=>{
      if(parqueo.espaciosDisponibles == 0){
        let index = this.parqueosDisponibles.indexOf(parqueo)
        this.parqueosDisponibles.splice(index,1)
      }
    })
  }

  eliminarReserva(reserva:Reserva){
    console.log("entra")
    for(let i=0;i<this.usuario.reservas.length;i++){
      if(this.usuario.reservas[i] == reserva){
        this.usuario.reservas.splice(i,1)
        break;
      }
    }
    let espacioReservado = reserva.campoReservado
    let estacionamientoID = reserva.estacionamiento.idEstacionamiento
    for(let i=0;i<this.parqueos.length;i++){
      if(this.parqueos[i].idEstacionamiento==estacionamientoID){
        this.parqueoSelect = this.parqueos[i];
        break;
      }
    }
    console.log(espacioReservado)
    for(let i=0;i<this.parqueoSelect.espacios.length;i++){
      if(this.parqueoSelect.espacios[i].numeroCampo==espacioReservado){
        this.parqueoSelect.espacios[i].placaReserva=""
        this.parqueoSelect.espacios[i].reservado=false
        break;
      }
    }
    console.log(this.parqueoSelect)
    for(let i=0;i<this.parqueos.length;i++){
      if(this.parqueos[i].idEstacionamiento==this.parqueoSelect.idEstacionamiento){
        this.parqueos[i] = this.parqueoSelect;
        break;
      }
    }
    // this.parqueoSelect.espacios
    // this.parqueos.forEach((parqueo:Estacionamiento)=>{
    //   if(parqueo.idEstacionamiento == estacionamientoID){
    //     parqueo.espacios.forEach((espacio:Espacio)=>{
    //       if(espacio.numeroCampo==espacioReservado){
    //         espacio.placaReserva = "";
    //         espacio.reservado = false;
    //         break;
    //       }
    //     })
    //     this.parqueoSelect = parqueo
    //   }
    // })

    // console.log(this.parqueoSelect)
    this._servicioEstacionamiento.actualizarEspacios(this.parqueoSelect,this.usuario)
    this.puestosDisponibles();
  }

  reservar(){
    if(this.placaSelect!=""){
      let estacionamientoSeleccionado = this.parqueosDisponibles.filter((parqueo) => parqueo.seleccionado)[0]
      let reserva = new Reserva(this.getDateFromString(this.fechaReserva+"T"+this.inicioReserva),
                                this.getDateFromString(this.fechaReserva+"T"+this.finReserva),
                                this.usuario.identificacion, estacionamientoSeleccionado)
      if (this.usuario.esJefatura){
            if (this.usuario.necesidadEspecial){
              for(let i = 0; i<estacionamientoSeleccionado.espacios.length;i++){
                if(!estacionamientoSeleccionado.espacios[i].reservado && estacionamientoSeleccionado.espacios[i].tipo == TEspacio.ESPECIAL){
                  estacionamientoSeleccionado.espacios[i].reservado = true
                  estacionamientoSeleccionado.espacios[i].placaReserva = this.placaSelect
                  this.espacioReservado = estacionamientoSeleccionado.espacios[i].numeroCampo
                  break;
                }
              }
            }
            else{
              for(let i = 0; i<estacionamientoSeleccionado.espacios.length;i++){
                if(!estacionamientoSeleccionado.espacios[i].reservado && estacionamientoSeleccionado.espacios[i].tipo == TEspacio.JEFATURA){
                  estacionamientoSeleccionado.espacios[i].reservado = true
                  estacionamientoSeleccionado.espacios[i].placaReserva = this.placaSelect
                  this.espacioReservado = estacionamientoSeleccionado.espacios[i].numeroCampo
                  break;
                }
              }
            }
          }
          else{
            if (this.usuario.necesidadEspecial){
              for(let i = 0; i<estacionamientoSeleccionado.espacios.length;i++){
                if(!estacionamientoSeleccionado.espacios[i].reservado && estacionamientoSeleccionado.espacios[i].tipo == TEspacio.ESPECIAL){
                  estacionamientoSeleccionado.espacios[i].reservado = true
                  estacionamientoSeleccionado.espacios[i].placaReserva = this.placaSelect
                  this.espacioReservado = estacionamientoSeleccionado.espacios[i].numeroCampo
                  break;
                }
              }
            }
            else{
              for(let i = 0; i<estacionamientoSeleccionado.espacios.length;i++){
                if(!estacionamientoSeleccionado.espacios[i].reservado && estacionamientoSeleccionado.espacios[i].tipo == TEspacio.COMUN){
                  estacionamientoSeleccionado.espacios[i].reservado = true
                  estacionamientoSeleccionado.espacios[i].placaReserva = this.placaSelect
                  this.espacioReservado = estacionamientoSeleccionado.espacios[i].numeroCampo
                  break;
                }
              }
            }
          }
      // estacionamientoSeleccionado.espaciosDisponibles -= 1;
      reserva.horarioInicio.anio = reserva.horarioInicio.año
      reserva.horarioFin.anio = reserva.horarioFin.año
      reserva.campoReservado = this.espacioReservado
      this.usuario.reservas.push(reserva)
      this._servicioFuncionario.reservar(this.usuario)
      this.puestosDisponibles();
      window.alert("Reservado")
      }
      else{
        window.alert("Debe elegir una placa de vehículo")
      }
  }

  getDateFromString(date:string):Fecha{
    /*Función que obtiene un string con el formato yyyy-MM-ddTHH:mm y lo convierte en 
    un objeto json con formato {año:yyyy, mes:MM, dia:dd, hora:HH:mm}*/
    let año = date.slice(0,4)
    let mes = date.slice(5,7)
    let dia = date.slice(8,10)
    let hora= date.slice(11,17)
    return new Fecha(año,mes,dia,hora)
  }

}
