import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { UsuarioService } from './usuario.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

// nuestra variedad de clientes
usuarios: any[];
// nuestra futura instancia de datatable
  dataTable: any;
  constructor(
    private usuarioServices: UsuarioService,
    private chRef: ChangeDetectorRef
  ) {}
    ngOnInit() {
    this.usuarioServices.getUsuario()
      .subscribe((data: any ) => {
       this.usuarios = data.object;
       // tendrás que esperar a que se produzca la detección de cambios y proyecte los datos en 
      // la plantilla html, puedes preguntar angular por eso ;-)
      this.chRef.detectChanges();
      // ahora puedes usar tablas de datos jquery:
      const table: any = $('table');
      this.dataTable = table.DataTable();
      });
  }
}
