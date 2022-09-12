import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  numerosArray: number[] = [];

  constructor() { }

  cargarArray(cuantosNum:number): number[] {
    let arreglo: number[] = [];
    for (let i = 0; i < cuantosNum; i++) {
      arreglo[i] = Math.floor(Math.random() * 100);       
    }
    return arreglo;
  }

  ngOnInit(): void {
    this.numerosArray = this.cargarArray(5);  
  }

}
