import { Component, OnInit } from '@angular/core';
import { RentaModel } from 'src/app/models/renta.model'
import { RentasService } from 'src/app/services/rentas.service';

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

}
