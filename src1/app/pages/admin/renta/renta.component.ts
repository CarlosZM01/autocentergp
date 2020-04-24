import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AutoModel } from 'src/app/models/auto.model';
import { AutosService } from 'src/app/services/autos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class AutoComponent implements OnInit {

  auto: AutoModel = new AutoModel();

  constructor( private autosService: AutosService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.autosService.getAuto( id )
        .subscribe( (resp: AutoModel) => {
          this.auto = resp;
          this.auto.id = id;
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

    if ( this.auto.id ) {
      peticion = this.autosService.actualizarAuto( this.auto );

    } else {
      peticion = this.autosService.crearAuto( this.auto );
    }

    peticion.subscribe( resp => {
      
      Swal.fire({
        title: `${ this.auto.marca } ${ this.auto.modelo }`,
        text: 'Datos guardados',
        icon: 'success'
      });

    });

  }

}
