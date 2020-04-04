import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

import { AutosService } from 'src/app/services/autos.service';
import { AutoModel } from 'src/app/models/auto.model';

import { RentasService } from 'src/app/services/rentas.service';
import { RentaModel } from 'src/app/models/renta.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-rentas',
  templateUrl: './rentas.component.html',
  styleUrls: ['./rentas.component.css']
})
export class RentasComponent implements OnInit {

  autos: RentaModel[];
  rentas: RentaModel[] = [];
  cargando: boolean;

  constructor( private rentasService: RentasService,
    private autosService: AutosService,
    private usuariosService: UsuariosService
     ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.rentasService.getRentas()
      .subscribe( resp => {
        this.rentas = resp;
        this.autos = resp;
        this.cargando = false;
      });
  }

}
