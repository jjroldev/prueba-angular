import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';


declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, AfterViewInit, OnInit {

  // constructor(private http: HttpClient) { }
  isHeaderVisible: boolean = true;

  isModalOpen: boolean = false;
  modalData: any[] = [];
  modalTitle: string = '';
  public filtroPrincipal: string = '';
  public filtroAdicional: string = '';

  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  paginatedArreglo: any[] = [];

  stats = {
    totalMailResgistrados: 493862,
    totalMailEnviados: 467015,
    totalMailListaNegra: 23773,
    totalMailNoDespachado: 2598,
    totalMailEsperaStatus: 32,
    totalMailRebotados: 383,
    totalMailErrorDesconocido: 61
  };

  baseRecord = {
    codigoMensaje: "test-0000-1111-2222-objeto-ficticio",
    fechaIngreso: "31/12/2099 23:59:59",
    idEmpresaHomologacion: "empresa-prueba-1234-5678",
    asunto: "Confirmación de pago PRUEBA @nombreEmpresaTest@",
    codigoPlantilla: "plantilla-fake-9999",
    nombrePlantilla: "NOTIFICACION PAGO PINPAD PRUEBA FICTICIA",
    origenPlantilla: "origen-ficticio",
    versionPlantilla: "99",
    codigoHomologacionPlantilla: "0000-test",
    codigoTipoMensaje: "tipo-mensaje-test-8888",
    nombreTipoMensaje: "FACTURACIÓN - TRANSAC TEST",
    claseNotify: "veris.transac.test",
    userIdNotify: "usuario.ficticio.0000",
    correoDestinatario: "correo.falso.prueba@example.com",
    correoConCopia: "copia.ficticia@testmail.com",
    correoConCopiaOculta: null,
    origenInvocacion: "aplicacion-ficticia-test",
    tieneVariables: true,
    tieneAdjuntos: false,
    pacPacNumero: "PAC-TEST-0001",
    nombrePaciente: "Paciente Prueba Ficticio",
    aplicaPrivacidadDatos: false,
    cedulaPrivacidadDatos: null,
    tipoIdentificPrivDatos: null,
    pacPacNumeroPrivDatos: null,
    nombrePacientePrivacidadDatos: null,
    procesado: true,
    codigoHistoricoMensaje: "historico-test-12345",
    estado: "PROCESADO_TEST",
    idTicket: "ticket-ficticio-7777",
    enviado: true,
    fechaEnviado: "31/12/2099 23:59:59",
    error: false,
    esRebotado: false,
    esListaNegra: false,
    fechaError: null,
    mensajeError: null,
    mailAbierto: true,
    fechaMailAbierto: "01/01/2100 00:00:10",
    mailClick: false,
    fechaMailClick: null,
    cantIntentosDespachoMail: 1,
    mensajeErrorDespachoMail: null,
    esEnviadoColaFallo: false,
    mensajeErrorStatusMail: null,
    cantIntentosStatusMail: 0
  };

  //simulacion de datos
  arreglo: any[] = Array(40).fill(this.baseRecord).map((item, index) => ({
    ...item,
    codigoMensaje: `${item.codigoMensaje}-${index + 1}`,
    idTicket: `ticket-ficticio-${1000 + index}`,
    nombrePaciente: `Paciente Prueba Ficticio ${index + 1}`
  }));

  ngOnInit(): void {
    this.initializePagination();
  }

  initializePagination(): void {
    this.totalPages = Math.ceil(this.arreglo.length / this.pageSize);
    this.paginateData(this.currentPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.paginateData(page);
    }
  }

  private paginateData(page: number): void {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedArreglo = this.arreglo.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  get pages(): number[] {
    const maxPagesToShow = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(this.totalPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

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

   buscar(): void {
    console.log("simulation")
    // console.log('Realizando consulta...');

    // this.http.get('/api/reporte/emails').subscribe();

    // of(Array(40).fill(this.baseRecord).map((e, i) => ({
    //   ...e,
    //   codigoMensaje: `${e.codigoMensaje}-${i + 1}`,
    //   idTicket: `ticket-${2000 + i}`
    // })))
    //   .pipe(delay(1000))
    //   .subscribe(resp => {
    //     console.log('Respuesta simulada recibida', resp);

    //     this.arreglo = resp;
    //     this.initializePagination();
    //   });
    }

  ngAfterViewInit(): void {
    $('.dias').select2({
      width: '100%',
      placeholder: 'Selecciona un rango'
    });
    flatpickr(".fecha-desde", {
      dateFormat: "d/m/Y",
      defaultDate: "today",
    });

    flatpickr(".fecha-hasta", {
      dateFormat: "d/m/Y",
      defaultDate: "today"
    });
  }

  ngOnDestroy(): void {
    $('.dias').select2('destroy');
  }
}

