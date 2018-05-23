
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';

const PAGESROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'} },
      { path: 'accout-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema'} },
      { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
      // Mantenimientos
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuario'} },
      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospital'} },
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Mèdico'} },
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Mèdico'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES );