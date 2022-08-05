# Introducción a Angular
Este es un breve listado de los temas fundamentales:

    Crear proyectos de Angular

    Explicar cada archivo y directorio de un proyecto

    Componentes

    Módulos

    One way data binding

    Uso del AngularCLI - Angular Command Line Interface

    Directivas creadas por Angular

    ngIf y ngIf-else

    Y más...

Esta es la sección donde empezaremos nuestro camino de Angular.


## Creación de proyecto

Para crear un proyecto es tan sencillo como ejecutar el comando `ng new nombreProyecto`.
Para correr el server sólo hay que poner `ng serve -o`

|Archivo|Proposito|
|--|--|
|tslint.json|Son reglas que nos obligaran a programar de cierta manera|
|tsconfig.json|Es la manera en la que se le menciona como sse usa Typescript en el proyecto|
|tsconfig.spec.json|Está relacionado a las pruebas unitarias o de integracion|
|tsconfig.app.json|Configuración dedicada a la app|
|package.json|Es delicado para añadir o eliminar paquetes, habla de dependencias de desarrollo, de producción, normalmente las dependencias si van al bundle final|
|package-lock.json|Este archivo dice como se construyeron modulos de node, etc.|
|karma.conf|Es para las pruebas unitarias basadas en Karma|
|angular.json|Tiene configuraciones importantes de la aplicación, como el favicon, carpeta de assets entre otras cosas|
|.editorconfig|Son ciertas reglas para Typescript|
|.browserlistrc| Solo sirve para dar compatibilidad con navegadores como el explorer 11|
|e2e|Pruebas End to End|


Dentro de la carpeta **environments** tenemos 2 archivos donde podemos alojarlas variables de entorno de TEST o de PROD.

## Concepto de one way data binding - enlazado en una sola vía

Si cambia el valor de la propiedad entonces lo redibujará en el HTML o DOM, en caso contrario sólo lo ignora, Angular hace estos movimientos de una manera muy eficiente y sabe identificar loque pasa.

## Creando componentes de forma dinámica
Para ello es tan fácil como ejecutar el siguiente comando: `ng g c heroes/listado` estando dentro de la carpeta raíz de nuestro proyecto.
