# Aplicación de Gifts

La sección contendrá nuestra primera aplicación real de Angular, este es un breve listado de los temas fundamentales:

    Modularización de la aplicación

    Estructura de la aplicación de media a gran escapa

    Componentes

    ViewChild

    Servicios

    Historial de búsquedas

    Uso de Api Keys

    LocalStorage

    Peticiones HTTP

    Animaciones mediante css

Recuerden que siempre tienen el código fuente al final de la sección para que lo puedan descargar y comparar contra el suyo en caso de que sea necesario.


## Tarea 1
1. Crear-Shared.module.ts: `ng g m shared`
2. Crear component sidebar.component.ts `ng g c shared/sidebar`
3. Exportar el sidebar (component): En el `shared module` exportar el `SidebarComponent`
4. Importar el shared.module dentro del app.module.ts: Dentor del `àpp.module` importar el `sharedModule`
5. <app-sidebar></app-sidebar> en el app.component.html

