import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursalName = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.url;

    if (url.includes('sucursal_1')) this.sucursalName = 'Sucursal 1';
    if (url.includes('sucursal_2')) this.sucursalName = 'Sucursal 2';
    if (url.includes('sucursal_3')) this.sucursalName = 'Sucursal 3';
    if (url.includes('sucursal_4')) this.sucursalName = 'Sucursal 4';
  }
}
