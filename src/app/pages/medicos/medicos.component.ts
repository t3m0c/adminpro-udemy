import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/medico/medico.service';

declare var swal: any;

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  cargando: boolean = true;
  medicos: Medico[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  medico: Medico;

  constructor(
    public _medicosService: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this.cargando = true;
    this._medicosService.cargarMedicos( this.desde )
    .subscribe( (resp: any) => {
      this.totalRegistros = resp.total;
      this.medicos = resp.medicos;
      this.cargando = false;
    });
  }

  buscarMedicos( termino: string ) {
      if ( termino.length <= 0 ) {
        this.cargarMedicos();
        return;
      }
      this.cargando = true;
      this._medicosService.buscarMedicos( termino)
      .subscribe( (medicos: Medico[]) => {
        this.medicos = medicos;
        this.cargando = false;
      });
    }

  editarMedico( medico: Medico ) {

  }

  borrarMedico( medico: Medico ) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar al medico ' + medico.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
    .then( borrar => {
      if ( borrar ) {
        this._medicosService.borrarMedico( medico._id )
        .subscribe( borrado => {
          this.cargarMedicos();
        });
      }
    });
  }

  cambiarDesde( valor: number ) {
    let desde = this.desde + valor;
    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();
  }
}
