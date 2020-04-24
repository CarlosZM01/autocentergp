import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
               private usuariosService: UsuariosService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form:NgForm ) {

    if ( form.invalid ) {
      console.log( 'Formulario no válido');
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

//-----------------------------------------------------------------------

// Crea usuario para iniciar sesion solo si no esta registrado
    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();

      if ( this.recordarme ) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/login');

    }, (err) => {

      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: 'El e-mail ya existe'
      });
      this.router.navigateByUrl('/registro');
    })


    this.auth.crearUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();
      
      if ( this.recordarme ) {
        localStorage.setItem('email', this.usuario.email);
      }

      // Swal.fire({
      //   icon: 'info',
      //   title: 'Cuenta creada',
      //   text: "Ya puedes iniciar sesión"
      // });
      
      this.router.navigateByUrl('/login');

    }, (err) => {

      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: 'El e-mail ya esta registrade'
      });
      this.router.navigateByUrl('/registro');
    });
    
    ;

//-----------------------------------------------------------------------

//Crea usuario en tabla usuarios aun si existe el correo


    this.auth.crearUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();
      
      if ( this.recordarme ) {
        localStorage.setItem('email', this.usuario.email);
      }
      
      this.router.navigateByUrl('/login');

    }, (err) => {

      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: 'El e-mail ya esta registrade'
      });
      this.router.navigateByUrl('/registro');
    });

//-----------------------------------------------------------------------

  }

}