import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaComponent } from './lista/lista.component';
import { MercadoComponent } from './mercado/mercado.component';

const Routes: Routes =[

    {path: 'usuarios', component: UsuarioComponent},
    {path: 'productos', component: ProductoComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'mercado', component: MercadoComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
