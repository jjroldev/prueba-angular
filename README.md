# Prueba Técnica Frontend – Angular 

Este proyecto fue desarrollado como parte de una prueba técnica de Frontend, con un enfoque principal en la maquetación y la fidelidad visual a las capturas provistas. Se ha utilizado el framework Angular y librerías externas para la implementación de componentes avanzados.

---

## Tecnologías y Versiones

El proyecto se ha configurado para cumplir con las siguientes especificaciones de entorno:

| Herramienta | Utilizado |
|------------|-----------|
| Framework  | Angular v9.1.0 |
| Entorno de Ejecución | Node.js v14.15.0 |
| Estilos | Bootstrap 4 |
| Iconos | Font Awesome |

---

## Librerías Externas Utilizadas

Para implementar las funcionalidades y diseños requeridos, se han integrado las siguientes librerías:

- **Select2**: Utilizado para estilizar los selectores de filtros (Tipo Filtro, Filtros Adicionales, Rango de Días Dashboard).
- **Flatpickr**: Implementado para los selectores de fechas (Fecha Desde y Fecha Hasta).
- **Paginación de Bootstrap**: Utilizada para la maquetación del control de paginación en la tabla del Dashboard.

---

## Configuración e Instalación

Sigue estos pasos para levantar el entorno de desarrollo local.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/jjroldev/prueba-angular.git
cd prueba-angular
```

### 2. Instalación de Dependencias

Instala todas las dependencias del proyecto, incluyendo las librerías mencionadas:

```bash
npm install
```

### 3. Ejecución

Ejecuta la aplicación en modo de desarrollo. El servidor se iniciará en `http://localhost:4200/`.

```bash
ng serve
```

---

## Funcionalidades Implementadas

A continuación, se detallan las funcionalidades implementadas según los requerimientos de la prueba:

---

### 1. Pantalla de Login (Ruta: `/auth`)

- **Maquetación**: Diseño enfocado en la fidelidad visual, incluyendo campos de Usuario y Contraseña.
- **Ubicación**: `src/app/views/pages/auth`

---

### 2. Selección de Sucursal y Enrutamiento

- **Maquetación**: Pantalla de selección de sucursales (Sucursal 1, Sucursal 2, etc.).
- **Enrutamiento**:
  - Clic en *Sucursal 1* → `localhost:xxxx/sucursal_1`
  - Clic en *Sucursal 2* → `localhost:xxxx/sucursal_2`
- **Ubicación**: `src/app/views/modules/sucursales`
- **Comportamiento**: Al seleccionar una sucursal, se navega a la ruta correspondiente y se muestra el nombre de esa sucursal como en la imagen referencial. Arriba también aparece el menú con el Dashboard.

---

### 3. Cabecera y Navegación Común (Layout)

- **Ubicación**: `src/app/layout`
- **Descripción**: Base de la página principal que contiene un header donde se renderiza contenido dinámico mediante `<router-outlet>`.

---

### 4. Dashboard (Ruta: `/sucursal_1/dashboard`)

El componente principal implementa la vista de Dashboard con las siguientes características:

- Se implementa un componente de cabecera (Header).
- La cabecera está ubicada en:  
  `src/app/views/modules/dashboard/cabecera-dashboard`
- Incluye un modal separado como componente adicional.

---

#### a. Tarjetas de Resumen (Cabecera de Información)

- **Diseño**: Maquetación de las cajas de información (Email Registrados, Email Enviados, Rebotados, etc.).
- **Datos**: Los valores mostrados son estáticos para priorizar maquetación.

---

#### b. Modal de Detalle

- **Acción**: Al hacer clic en cualquier tarjeta se abre una ventana modal (diseño según `image_170496.png`).
- **Contenido**: Lista en formato tabular la misma información de las tarjetas.

---

#### c. Implementación de Filtros

Todos los selectores y campos de fecha usan las librerías indicadas:

- **Select2**:
  - Tipo Filtro (Cód. Mensaje, ID Ticket, Correo Destinatario).
  - Filtros Adicionales (Estado, Enviado, Error).
  - Rango de Días Dashboard (Último(s) 31 Día(s)).
- **Flatpickr**:
  - Fecha Desde y Fecha Hasta.
- **Funcionalidad**: Implementación visual con lógica preparada (onValueChange), sin afectar la data real.

---

#### d. Tabla de Reporte

- **Scroll Horizontal**: Se implementó `overflow-x: auto` para mostrar todas las columnas.
- **Datos**: Data genérica simulada.
- **Paginación**: Maquetada con Bootstrap y funcional.

---

#### e. Consumo de Servicios (API)

- **Buscar**: Al hacer clic se simula un GET al endpoint `/api/reporte/emails` usando HttpClient.
- **Descargar Archivo**: Implementación visual sin acción funcional.

---

## Consideraciones de Diseño y Estilo

- **Estándar de Diseño**: Se priorizó consistencia y uniformidad usando Bootstrap.
- **Fuentes y Colores**: Paleta y tipografía estándar en todo el proyecto.
- **Fidelidad Visual**: Especial énfasis en replicar el diseño de las tarjetas y la paginación del Dashboard según las imágenes.

