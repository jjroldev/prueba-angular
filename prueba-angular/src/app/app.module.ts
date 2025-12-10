import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './views/pages/auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { SucursalesComponent } from './views/modules/sucursales/sucursales.component';
import { SucursalComponent } from './views/modules/sucursal/sucursal.component';
import { DashboardComponent } from './views/modules/dashboard/dashboard.component';
import { SucursalContentComponent } from './views/modules/sucursal/components/sucursal-content/sucursal-content.component';
import { RouterModule } from '@angular/router';
import { CabeceraDashboardComponent } from './views/modules/dashboard/components/cabecera-dashboard/cabecera-dashboard.component';
import { ModalComponent } from './views/modules/dashboard/components/cabecera-dashboard/components/modal/modal.component';
import { SelectFiltroComponent } from './views/modules/dashboard/components/select-filtro/select-filtro.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutComponent,
    SucursalesComponent,
    SucursalComponent,
    DashboardComponent,
    SucursalContentComponent,
    CabeceraDashboardComponent,
    ModalComponent,
    SelectFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
