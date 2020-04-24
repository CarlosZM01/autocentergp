import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { RentaModel } from 'src/app/models/renta.model';
import { RentasService } from 'src/app/services/rentas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AutosService } from 'src/app/services/autos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {

  renta: RentaModel = new RentaModel();

  constructor( private autosService: AutosService,
               private usuariosService: UsuariosService,
               private rentasService: RentasService,
               private route: ActivatedRoute ) { }
  
  ngOnInit(): void {
  
    // const id = this.route.snapshot.paramMap.get('id');
    
    // if ( id == 'nuevo' ) {
    
    //     this.autosService.getAuto( id )
    //     .subscribe( (resp: AutoModel) => {
    //     this.auto = resp;
    //     this.auto.id = id;
    //     });
    // }
  
  }
  
  guardar( form: NgForm ) {
  
    // if ( form.invalid ) {
    //   console.log( 'Formulario no válido');
    //   return;
    // }
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion: Observable<any>;
    
    if ( this.renta.id ) {
      peticion = this.rentasService.actualizarRenta( this.renta );
    
    } else {
      peticion = this.rentasService.crearRenta( this.renta );
    }
    
    peticion.subscribe( resp => {
    
      Swal.fire({
        title: `${ this.renta.email } ${ this.renta.cliente }`,
        text: 'Datos guardados',
        icon: 'success'
      });
    
    });
  
  }

}
  