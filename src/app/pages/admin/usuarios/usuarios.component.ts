import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cargando: boolean;

  constructor( private auth: AuthService,
    private router: Router,
    private usuariosService: UsuariosService ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.usuariosService.getUsuarios()
      .subscribe( resp => {
        this.usuarios = resp;
        this.cargando = false;
      });
  }

  borrarUsuario( usuario: UsuarioModel, i: number ) {

    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara ${ usuario.nombre } ${ usuario.apellido1 }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.usuarios.splice(i, 1);
        this.usuariosService.borrarUsuario( usuario.id ).subscribe();
      }
      
    });
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
