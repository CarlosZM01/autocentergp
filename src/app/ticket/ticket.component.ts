import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import 'rxjs/add/operator/filter';
import { RentaModel } from 'src/app/models/renta.model';
// import { TicketService } from 'src/app/admin/services/ticket.service';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  // styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  order: string;
  param1: string
  // ticketVar: TicketService;
  // productosAgregados: Venta[]
  cols: any[];
  colu: any[]
  // ventaRecibida: Venta[]
  total: string


  constructor( private route: Router,
    private _router: ActivatedRoute) {
    // this.ticketVar = ticketService
  }


  imprimir3() {
    //window.print();
    let doc = new jsPDF();
    doc.fromHTML(document.getElementById('imp'), 10, 10)
    doc.save('Ticket de compra')
  }

  imprimir() {
    const options = {
      filename: 'Ticket_file.pdf',
      image: { type: 'jpg' },
      jspdf: { orienteation: 'landscape' }

    }

    const content: Element = document.getElementById('imp')
    //const contentTot: Element = document.getElementById('impri')

    html2pdf().from(content).set(options).save()


  }


  // traerProductos() {//traer datos prods.
  //   this.ticketService.getParametro();
  //   //console.log("trayendo...")
  // }

  aceptar() {
    this.route.navigate(['../admon/relacionDiaria'])
  }



  ngOnInit() {
    this.colu = [{}]
    let recibido
    // this.traerDatos()
    recibido = window.sessionStorage.getItem("ventaRegistrada")
    this.total = window.sessionStorage.getItem("totalVenta")

    //console.log(recibido)

    // this.ventaRecibida = JSON.parse(recibido);
    //console.log(this.ventaRecibida)







    // console.log("venta recibida :D", this.ventaRecibida)
    this.cols = [
      { field: 'email', header: 'USUARIO' },
      { field: 'nombre', header: 'NOMBRE' },
      { field: 'modelo', header: 'AUTO' },
      { field: 'dias', header: 'DIAS' },
      { field: 'monto', header: 'MONTO' },
      { field: 'total', header: 'TOTAL' }
    ]



  }
}