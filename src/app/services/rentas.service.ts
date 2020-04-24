import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentaModel } from '../models/renta.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentasService {

  private url = 'https://autocenter-35144.firebaseio.com';

  constructor( private http: HttpClient) { }


  crearRenta( renta: RentaModel ) {

    return this.http.post(`${ this.url }/rentas.json`, renta)
          .pipe(
            map( (resp: any) => {
              renta.id = resp.name;
              return renta;
            })
          );
  }

  actualizarRenta( renta: RentaModel ) {

    const rentaTemp = {
      ...renta
    };

    delete rentaTemp.id;

    return this.http.put(`${ this.url }/rentas/${ renta.id }.json`, rentaTemp);
  }


  borrarRenta( id:string ) {
     return this.http.delete(`${ this.url }/rentas/${ id }.json`);
  }


  getRenta( id: string ) {
    return this.http.get(`${ this.url }/rentas/${ id }.json`);
  }


  getRentas() {
    return this.http.get(`${ this.url }/rentas.json`)
          .pipe(
            map( this.crearArreglo ),
            delay(300)
          );
  }

  private crearArreglo( rentasObj: object ) {

    const rentas: RentaModel[] = [];

    if ( rentasObj === null ) { return []; }

    Object.keys( rentasObj ).forEach( key => {

      const renta: RentaModel = rentasObj [key];
      renta.id = key;

      rentas.push( renta );
    });

    return rentas;

  }


}
