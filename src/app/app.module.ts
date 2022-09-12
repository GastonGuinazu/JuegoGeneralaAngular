import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BotonComponent } from './boton/boton.component';
import { DadosComponent } from './dados/dados.component';
import { GeneralaJuegoComponent } from './generala-juego/generala-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    BotonComponent,
    DadosComponent,
    GeneralaJuegoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
