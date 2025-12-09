import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './views/pages/auth/auth.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { SucursalesComponent } from './views/modules/sucursales/sucursales.component';
import { SucursalComponent } from './views/modules/sucursal/sucursal/sucursal.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutComponent,
    SucursalesComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
