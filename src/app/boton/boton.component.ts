import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() arreglo: number[] = [];

  @Output() enviarArreglo = new EventEmitter<number[]>();
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
