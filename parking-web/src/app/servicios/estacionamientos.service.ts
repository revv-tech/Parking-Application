import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estacionamiento } from '../model/estacionamiento';

@Injectable({
  providedIn: 'root'
})


// export class EstacionamientosService {
//   constructor(private http: HttpClient) { }

//   getAll(): Observable<Estacionamiento[]> {
//     return this.http.get<Estacionamiento[]>(baseUrl);
//   }
//   // get(id: any): Observable<Estacionamiento> {
//   //   return this.http.get(`${baseUrl}/${id}`);
//   // }
//   create(data: any): Observable<any> {
//     return this.http.post(baseUrl, data);
//   }
//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }
//   delete(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }
//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }
//   findByTitle(title: any): Observable<Estacionamiento[]> {
//     return this.http.get<Estacionamiento[]>(`${baseUrl}?title=${title}`);
//   }
// }

export class EstacionamientosService {
  private baseUrl:string = 'http://localhost:8080/api/parqueos'

  parqueos:any=[]
  // parqueos:any=[
  //   {
  //   "idEstacionamiento":2,
  //   "ubicacion":"Parqueo 101, Del Tecnológico, Av 9, Amón, San José, 10102",
  //   "nombre":"Parqueo 101",
  //   "espaciosTotal":10,
  //   "tipo":"PROPIO",
  //   "espaciosDisponibles":10,
  //   "espaciosComunes":3,
  //   "espaciosOficiales": 5,
  //   "espaciosEspeciales": 2,
  //   "imagen": "https://res.cloudinary.com/dhoxfrbt2/image/upload/v1650575995/E2.jpg"
  //   },
  //   {
  //     "idEstacionamiento":4,
  //     "ubicacion":"Parqueo Tata, De Torre Mercedes 100 este, 100 sur, 50 oeste, San José, 10103",
  //     "nombre":"Busca Cajón",
  //     "espaciosTotal":15,
  //     "tipo":"SUBCONTRATADO",
  //     "espaciosDisponibles":15,
  //     "espaciosComunes":13,
  //     "espaciosOficiales": 0,
  //     "espaciosEspeciales": 2,
  //     "imagen": "https://res.cloudinary.com/dhoxfrbt2/image/upload/v1650575995/E4.jpg"   
  // }
  
  // ]

  constructor(private http: HttpClient) { 
    console.log("funcionando el servicio de estacionamientos")
  }

  // getparqueos(): Observable<any>{
  //   return this.http.get(baseUrl);
  //   // return this.parqueos;
  // }

  getParqueos(): Observable<any[]> {
    console.log("Results:")
    this.http.get(this.baseUrl+"/consultar-parqueos").subscribe(_parqueos => {
      this.parqueos = _parqueos
      console.log(_parqueos)
    })
    return this.parqueos;
  }

  getUnParqueo(index:number){
    this.parqueos = this.getParqueos();
    return this.parqueos[index];
  }

  addParking = async (estacionamiento:any) => {
    this.http.put(this.baseUrl + "/manageParking/addParking", estacionamiento)
    .subscribe(_result => {
        return  _result
    })
  }
}

