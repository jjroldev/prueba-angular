// src/app/components/select-filtro/select-filtro.component.ts

import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare let $: any;

interface FiltroOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select-filtro',
  templateUrl: './select-filtro.component.html',
  styleUrls: ['./select-filtro.component.css']
})
export class SelectFiltroComponent implements AfterViewInit {

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  public opciones: FiltroOption[] = [
    { value: 'codigoMensaje', label: 'Cód. Mensaje' },
    { value: 'idTicket', label: 'ID Ticket' },
    { value: 'codigoHistoricoMensaje', label: 'Cód. Histórico Mensaje' },
    { value: 'codigoPlantilla', label: 'Cód. Plantilla' },
    { value: 'nombrePlantilla', label: 'Nombre Plantilla' },
    { value: 'origenPlantilla', label: 'Origen Plantilla' },
    { value: 'codigoHomologacionPlantilla', label: 'Cód. Homologación Plantilla' },
    { value: 'codigoTipoMensaje', label: 'Cód. Tipo Mensaje' },
    { value: 'nombreTipoMensaje', label: 'Nombre Tipo Mensaje' },
    { value: 'claseNotify', label: 'Clase Notify' },
    { value: 'userIdNotify', label: 'Usuario Notify' },
    { value: 'idEmpresaHomologacion', label: 'ID Empresa Homologación' },

    { value: 'fechaIngreso', label: 'Fecha Ingreso' },
    { value: 'fechaEnviado', label: 'Fecha Enviado' },
    { value: 'fechaMailAbierto', label: 'Fecha Mail Abierto' },
    { value: 'fechaMailClick', label: 'Fecha Mail Click' },
    { value: 'fechaError', label: 'Fecha Error (Rebote/Fallo)' },

    { value: 'correoDestinatario', label: 'Correo Destinatario' },
    { value: 'correoConCopia', label: 'Correo Con Copia (CC)' },
    { value: 'correoConCopiaOculta', label: 'Correo Con Copia Oculta (CCO)' },
    { value: 'asunto', label: 'Asunto' },

    { value: 'estado', label: 'Estado General' },
    { value: 'procesado', label: 'Procesado (Sí/No)' },
    { value: 'enviado', label: 'Enviado (Sí/No)' },
    { value: 'error', label: 'Error (Sí/No)' },
    { value: 'esRebotado', label: 'Es Rebotado (Sí/No)' },
    { value: 'esListaNegra', label: 'Es Lista Negra (Sí/No)' },
    { value: 'mailAbierto', label: 'Mail Abierto (Sí/No)' },
    { value: 'mailClick', label: 'Mail Click (Sí/No)' },
    { value: 'mensajeError', label: 'Mensaje Error (Detalle)' },
    { value: 'mensajeErrorDespachoMail', label: 'Error Despacho Mail' },
    { value: 'mensajeErrorStatusMail', label: 'Error Status Mail' },
    { value: 'esEnviadoColaFallo', label: 'Enviado a Cola Fallo (Sí/No)' },

    { value: 'origenInvocacion', label: 'Origen Invocación' },
    { value: 'tieneVariables', label: 'Tiene Variables (Sí/No)' },
    { value: 'tieneAdjuntos', label: 'Tiene Adjuntos (Sí/No)' },
    { value: 'cantIntentosDespachoMail', label: 'Intentos Despacho Mail' },
    { value: 'cantIntentosStatusMail', label: 'Intentos Status Mail' },

    { value: 'pacPacNumero', label: 'Número Paciente' },
    { value: 'nombrePaciente', label: 'Nombre Paciente' },
    { value: 'aplicaPrivacidadDatos', label: 'Aplica Privacidad Datos' },
    { value: 'cedulaPrivacidadDatos', label: 'Cédula Privacidad Datos' },
    { value: 'tipoIdentificPrivDatos', label: 'Tipo Identif. Privacidad Datos' },
    { value: 'pacPacNumeroPrivDatos', label: 'Número Paciente Privacidad Datos' },
    { value: 'nombrePacientePrivacidadDatos', label: 'Nombre Paciente Privacidad Datos' },
  ];

  ngAfterViewInit(): void {
    $('.select-filter').select2({
      width: '100%',
      placeholder: 'Selecciona un rango'
    });
  }

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}