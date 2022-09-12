import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generala-juego',
  templateUrl: './generala-juego.component.html',
  styleUrls: ['./generala-juego.component.css']
})
export class GeneralaJuegoComponent implements OnInit {

  tiros: number[] = [];
  cuantosTiros: boolean = true;
  generala: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  numeroObtenido(): number{
    let numero: number = Math.floor(Math.random() * 7);
    while (numero < 1){
      numero = Math.floor(Math.random() * 7);
    }     
   return numero;
   
 }  

//  arregloAzar: string[]=[];
//  finJuegoString:string ='';

//  AllEqual = (arr:any[]) => arr.every (val => val === arr[0]);
//  pushDice (url:string){
//   this.arregloAzar.push(url);
//   if(this.arregloAzar.length >=5){
//     if (this.AllEqual(this.arregloAzar)){
//       this.finJuegoString = 'Ganaste!!'
//     }
//     else{
//       this.finJuegoString = 'Perdiste..'
//     }
//   }
//  }

  tirarElDado(): void{
    if(this.tiros.length <= 5){
      this.tiros[this.tiros.length] = this.numeroObtenido();      
    }
    if(this.tiros.length == 5){
      this.cuantosTiros = false;
      let flag: boolean = true;
      for (let index = 1; index < this.tiros.length; index++) {        
        if(this.tiros[index] != this.tiros[index-1]){
          flag = false;
        }
      }
      this.generala = flag;
    }
  }

  reiniciar(): void{
    this.tiros = [];
    this.cuantosTiros = true;
    this.generala = false;
  }  

}
