# Seccion 5

## Creación de Módulo mediante CLI
Para crear un nuevo módulo es tan sencillo como poner:
`ng g m dbz`

## Creando componente mediante CLI
Para ello es tan facil como ejecutar el siguiente comando:

`ng g c dbz/mainPage --skipTests` ó 
`ng g c dbz/mainPage --skip-tests` 

## Modulo de formularios en Angular
Para manejar formularios en angular disponemos del siguiente `FormsModule`, este evita que se haga un refresh cuando se envia el forms.

## ngModel
[] sirve para asignar un valor al valordel formulario.
Cuando se manda un valor significa que es un evento, por lo que sería con ()

`[(ngModel)]` significa que quiere tanto escuchar como emitir el evento. Esto lo cambia en tiempo real. A este concepto se le conoce como **two way data binding**. Esto quiere decir que tanto emite como recibe propiedades.


`{{ personaje.poder | number}}` pinta con comas debido a la inteligencia de Angular.

## Info entre componente padre a hijo
Es necesario poner el decorador `@Input()` Significa que recibirá información del componente padre. Esto se hereda desde el template HTML y se pone una sintaxis como la siguiente `[personajes]="personajes">` donde [personajes] será el valor de nuestro nuevo componente y ="personajes" será el valor de la variable del componente padre

## Emitir info desde el componente hijo al padre
Para ello haremos uso del decorador `@Output` como el siguiente ejemplo:
`@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();`


Para cachar algun valor dentro del template html padre podemos poder algo como:
`(onNuevoPersonaje)="agregarNuevoPersonaje( $event )"> `

Finalmente para usarlo dentro del componente padre podemos poner:

```
agregarNuevoPersonaje( guerrero: Personaje){
    console.log(guerrero)
  }
```

## Depuración
Es tan sencillo como incluir la línea de código `debugger` de JS para pausar la ejecución en ese punto y poder identificar que pasa en ese momento del programa.

Además en Visual estudio podemos usar **F5** y podemos configurar una instancia de Google Chrome para depurar la aplicación de una manera muy sencilla.

## Servicios
Los servicios en Angular son semejantes a tener un **Singletone** es decir, una unica instancia en toda la app.

El servicio será el lugar donde centralicemos toda la información para que se aloje la data, las peticiones, etc. 
Es decir, contendrá la lógica. Sirve para manipular el estado de la app.

```
/**Creamos instancia del service 
   * A esto se le conoce como inyección de dependecias.
   * Lo que hicimos fue inyectar el servicio en este componente
  */
  constructor( private dbzService: DbzService ){}
```

[Documentación sobre el servicio](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


## Mandar release desde Git

git tag -a v0.1.1 -m "Fin Seccion 5 Modulo DBZ"

Enviar a GitHub:
git push --tags