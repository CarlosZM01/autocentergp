import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';
import { AutoModel } from 'src/app/models/auto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

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

}
