import { Component, OnInit } from '@angular/core';
import { RentaModel } from 'src/app/models/renta.model'
import { RentasService } from 'src/app/services/rentas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rentas',
  templateUrl: './rentas.component.html',
  styleUrls: ['./rentas.component.css']
})
export class RentasComponent implements OnInit {

  rentas: RentaModel[] = [];
  cargando: boolean;

  constructor( private rentasService: RentasService ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.rentasService.getRentas()
      .subscribe( resp => {
        this.rentas = resp;
        this.cargando = false;
      });
  }

  borrarRenta( renta: RentaModel, i: number ) {

    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara ${ renta.cliente } ${ renta.auto }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.rentas.splice(i, 1);
        this.rentasService.borrarRenta( renta.id ).subscribe();
      }
      
    });
  }

}
