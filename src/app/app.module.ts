import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaComponent } from './lista/lista.component';
import { MercadoComponent } from './mercado/mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent,
    ListaComponent,
    MercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
