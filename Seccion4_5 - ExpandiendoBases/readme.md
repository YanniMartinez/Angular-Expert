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