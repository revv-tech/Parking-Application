import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globals',
  templateUrl: './globals.component.html',
  styleUrls: ['./globals.component.css']
})
export class GlobalsComponent implements OnInit {

  // Usuario loggeado
  public static globalUser:any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
