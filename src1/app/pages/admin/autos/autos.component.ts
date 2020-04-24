import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';
import { AutoModel } from 'src/app/models/auto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  autos: AutoModel[] = [];
  cargando: boolean;

  constructor( private autosService: AutosService ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.autosService.getAutos()
      .subscribe( resp => {
        this.autos = resp;
        this.cargando = false;
      });
  }

  borrarAuto( auto: AutoModel, i: number ) {

    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara ${ auto.marca } ${ auto.modelo }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.autos.splice(i, 1);
        this.autosService.borrarAuto( auto.id ).subscribe();
      }
      
    });

    

  }

}
