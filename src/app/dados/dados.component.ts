import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  @Input() tiros: number[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  queSalio(numero: number): string{
    switch (numero){
      case 1:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300007/97719825-dados-blancos-n%C3%BAmero-1-icono-.jpg?fj=1";
      case 2:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300003/97719821-icono-de-dados-blancos-n%C3%BAmero-2-.jpg?fj=1";
      case 3:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300009/97719827-dados-blancos-n%C3%BAmero-3-icono-de-vector-.jpg?fj=1";
      case 4:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300001/97719819-dados-blancos-n%C3%BAmero-4-icono-.jpg?fj=1";
      case 5:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300005/97719823-dados-blancos-n%C3%BAmero-5-icono-.jpg?fj=1";
      case 6:
        return "https://previews.123rf.com/images/imagevectors/imagevectors1803/imagevectors180300002/97719820-dados-blancos-n%C3%BAmero-6-icono-.jpg?fj=1";
    }
    return "";
  }
}
