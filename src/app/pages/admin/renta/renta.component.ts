import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RentasService } from 'src/app/services/rentas.service';
import { RentaModel } from 'src/app/models/renta.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {

  renta: RentaModel = new RentaModel();

  constructor( private rentasService: RentasService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.rentasService.getRenta( id )
        .subscribe( (resp: RentaModel) => {
          this.renta = resp;
          this.renta.id = id;
        });
    }

  }

}
