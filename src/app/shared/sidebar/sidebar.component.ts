import { Component, OnInit } from '@angular/core';

// Servicios
import { SidebarService, UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sideBar: SidebarService,
    public _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
