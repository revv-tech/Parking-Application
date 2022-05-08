import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public funcionarioService : FuncionariosService) { }

  ngOnInit(): void {
  }

}
