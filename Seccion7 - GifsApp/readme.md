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

## Decorador @ViewChild
@ViewChild('') dentro de los parentesis va la el nombre del elemento que nosotros queremos buscar. Este decorador lo que hará es buscar en el HTML donde está la referencia local 

## Non-null assertion operator
[Documentación](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)
Para asegurar que un elemento nunca será nulo podemos poner el caracter **!**


## Creación de servicios mediante CLI

Para crear un servicio es tan sencillo como poner el siguiente comando:
`ng g s gifs/services/gifs --skip-tests`

## Ejercicio mostrar historial
1. Crear el ngFor dentro del elemento `sidebar.component.html` y manejarlo en su componente.
2. Dentro del `sidebar.component.ts` crear un método como el siguiente:
    ```
    get historial(){
        return this.gifsService...
    }
    ```
    Esta información deberá estár conectada al servicio
Nota: No se debe importar en ningun momento el servicio debido a la propiedad `providedIn: 'root'` la cual permite que sea accesado en cualquier punto de la app.

## Pipe para poder Capital

Para siempre poner capital cada palabra podemos usar el siguiente pipe:
`{{ query | titlecase }}`, esto sólo es una modificación visual, no afecta en nada a la información.

## Consumo a la API de GIPHY
[GIPHY Developers](https://developers.giphy.com/)
Para realizar busqueda podemos consultar la [Documentación oficial](https://developers.giphy.com/docs/api/endpoint#search) para entender como es que funciona la API.

## importando módulo para peticiones HTTP de forma global

```
/**
   * Con este podremos hacer peticiones HTTP desde Angular
   * pero este estará en base a Observables, que son más poderosos
   * que las promesas, por lo general tienen más control que las promesas
   */
  constructor( private http: HttpClient){}

```