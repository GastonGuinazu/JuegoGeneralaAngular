import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() numero: number = 0;

  constructor() { }

  ngOnInit(): void {    
  }

  par(numero:number): boolean{
    if(numero%2 == 0){
      return true;
    }
    return false;
  }
}

