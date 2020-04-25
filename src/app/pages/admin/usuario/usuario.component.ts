import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private usuariosService: UsuariosService,
               private auth: AuthService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.usuariosService.getUsuario( id )
        .subscribe( (resp: UsuarioModel) => {
          this.usuario = resp;
          this.usuario.id = id;
        });
    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log( 'Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

      let peticion: Observable<any>;

    if ( this.usuario.id ) {
      peticion = this.usuariosService.actualizarUsuario( this.usuario );
    } else {
      peticion = this.usuariosService.crearUsuario( this.usuario );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: `${ this.usuario.nombre } ${ this.usuario.apellido1 }`,
        text: 'Datos guardados',
        icon: 'success'
      });

    });

  }

}