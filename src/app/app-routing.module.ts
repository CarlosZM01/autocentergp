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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'catalogo'   , component: CatalogoComponent },
  { path: 'autos'   , component: AutosComponent },
  { path: 'auto/:id'   , component: AutoComponent },
  { path: 'usuarios'   , component: UsuariosComponent },
  { path: 'usuario/:id'   , component: UsuarioComponent },
  { path: '**', redirectTo: 'login' }
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
