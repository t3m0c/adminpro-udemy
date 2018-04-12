
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const PAGESROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
      { path: 'accout-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES );