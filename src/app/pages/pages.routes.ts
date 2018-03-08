import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const PAGESROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'accout-settings', component: AccoutSettingsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES );