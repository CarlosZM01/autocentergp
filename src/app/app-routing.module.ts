import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/user/registro/registro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { CatalogoComponent } from './pages/user/catalogo/catalogo.component';
import { AutosComponent } from './pages/admin/autos/autos.component';
import { AutoComponent } from './pages/admin/auto/auto.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { UsuarioComponent } from './pages/admin/usuario/usuario.component';
import { RentasComponent } from './pages/admin/rentas/rentas.component';
import { RentaComponent } from './pages/admin/renta/renta.component';
import { AuthGuard } from './guards/auth.guard';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'catalogo'   , component: CatalogoComponent },
  { path: 'autos'   , component: AutosComponent },
  { path: 'auto/:id'   , component: AutoComponent },
  { path: 'usuarios'   , component: UsuariosComponent },
  { path: 'usuario/:id'   , component: UsuarioComponent },
  { path: 'rentas'   , component: RentasComponent },
  { path: 'renta/:id'   , component: RentaComponent },
  { path: 'ticket'   , component: TicketComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
