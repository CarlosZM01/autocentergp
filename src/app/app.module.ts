import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/user/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AutoComponent } from './pages/admin/auto/auto.component';
import { AutosComponent } from './pages/admin/autos/autos.component';
import { UsuarioComponent } from './pages/admin/usuario/usuario.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { CatalogoComponent } from './pages/user/catalogo/catalogo.component';
import { RentasComponent } from './pages/admin/rentas/rentas.component';
import { RentaComponent } from './pages/admin/renta/renta.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    AutoComponent,
    AutosComponent,
    UsuarioComponent,
    UsuariosComponent,
    CatalogoComponent,
    RentasComponent,
    RentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
