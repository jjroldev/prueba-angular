import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { SucursalesComponent } from './views/modules/sucursales/sucursales.component';
import { SucursalComponent } from './views/modules/sucursal/sucursal.component';
import { DashboardComponent } from './views/modules/dashboard/dashboard.component';
import { SucursalContentComponent } from './views/modules/sucursal/components/sucursal-content/sucursal-content.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sucursales', component: SucursalesComponent
      },
      {
        path: 'sucursal_1', component: SucursalComponent,
        children: [
          { path: '', component: SucursalContentComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      },
      {
        path: 'sucursal_2', component: SucursalComponent,
        children: [
          { path: '', component: SucursalContentComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      },
      {
        path: 'sucursal_3', component: SucursalComponent,
        children: [
          { path: '', component: SucursalContentComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      },
      {
        path: 'sucursal_4', component: SucursalComponent,
        children: [
          { path: '', component: SucursalContentComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
