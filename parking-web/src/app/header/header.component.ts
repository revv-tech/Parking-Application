import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public funcionarioService : FuncionariosService) {
   }
  
  ngOnInit(): void {
  }

  logout () {
    this.funcionarioService.isLoggedInBool = false;
    this.funcionarioService.isAdmin = false;
    this.funcionarioService.usuarioLoggeado = null;
  }
  
  

 

  

}
