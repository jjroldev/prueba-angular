import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-cabecera-dashboard',
  templateUrl: './cabecera-dashboard.component.html',
  styleUrls: ['./cabecera-dashboard.component.css']
})
export class CabeceraDashboardComponent implements OnInit {

  isHeaderVisible: boolean = true;

  isModalOpen: boolean = false;
  modalData: any[] = [];
  modalTitle: string = '';

  stats = {
    totalMailResgistrados: 493862,
    totalMailEnviados: 467015,
    totalMailListaNegra: 23773,
    totalMailNoDespachado: 2598,
    totalMailEsperaStatus: 32,
    totalMailRebotados: 383,
    totalMailErrorDesconocido: 61
  };


  openCardModal(cardTitle: string): void {
    this.modalTitle = cardTitle;

    this.modalData = [
      { Tipo: cardTitle, Cantidad: this.stats.totalMailResgistrados, Observacion: 'Datos detallados para: ' + cardTitle },
      { Tipo: 'Email enviado', Cantidad: this.stats.totalMailEnviados, Observacion: 'Cualquier texto' },
      { Tipo: 'Rebotados', Cantidad: this.stats.totalMailRebotados, Observacion: 'Cualquier texto' }
    ];
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  toggleHeaderVisibility(): void {
    this.isHeaderVisible = !this.isHeaderVisible;
  }

  ngAfterViewInit(): void {
    $('.dias').select2({
      width: '100%',
      placeholder: 'Selecciona un rango',
      minimumResultsForSearch: Infinity
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    $('.dias').select2('destroy');
  }
}
