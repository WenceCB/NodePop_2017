# Nodepop

## Api para trabajar con MongoDB


Script para eliminar y poblar tablas, definido en el package.json

>npm init installDB

Dependencias del proyecto

>npm install

## Estructura de carpetas
### /lib


***connectMongoose.js***

> Script para conectar a la base de datos.
 
***datos.json***

> jSON que contiene los dos anuncios para trabajar con ellos.

***installDB.js***

> Script que conecta a la BD, elimina las tablas existentes y vuelve a crear los dos anuncios del jSON dado.
 
### /models


***Anuncio.js***

> Contiene la definición del esquema del que se estructura un anuncio.
> Se crean los métodos estáticos necesarios para poder llamarlos:
>> ***lista***
>> 
>> Para obtener la lista de todos de los anuncios, con su correspondientes filtros, paginación y límite
>> 
>> ***lista_tags***
>> 
>> Para obtener el listado de los tags en todos los anuncios

### /public

Archivos estáticos, importante definir en el app.js

>app.use(express.static(path.join(__dirname, 'public')));


##ROUTES
###apiv1
En esta carpeta se encuentran los archivos que son llamados a través de peticiones y su comportamiento

***anuncios.js***
> Se importa el modelo de Anuncio y en función del tipo de petición recibida se llama al método estático o no
> Si la peticion es de tipo ***GET*** se comprueba si hay filtros,limite o paginación
> Si la petición es de tipo ***POST*** se inserta en la BD y se muestra al usuario
> Manda variable a la vista.

***crear.js***
> Atiende la petición a la ruta crear y se muestra al usuario

***filtrar.js***
> Atiende la petición a la ruta filtrar y se muestra al usuario

***tags.js***

> Se importa el modelo de Anuncio y se hace la llamada al método estático lista_tags.js
> Manda variable a la vista

###index.js

> Atiende la petición a la ruta y la muestra al usuario

##Views

***anuncioGuardado.ejs***
> Con la variable recibida del controlador, muestro los campos al usuario formateados.

***anuncios.ejs***
> Recorro la variable recibida y muestro los campos de la misma, a través de un bucle for y con los datos formateados.

***crear.ejs***
> Vista sin más.

***error.ejs***
> Recibe un error y se muestra al usuario, si es un 404, muestra un aviso personalizado.

***filtrar.ejs***
> Contiene un formulario que a través de javascript, formatea los datos introducidos por el usuario, para que puedan ser pasados a la API mediante una URL.
> Destacar que el contenido almacenado en un array, se ha trabajado para que el resultado sea /apiv1/anuncios?parametro=valor,parametro=valor

***footer.ejs***
> Contiene formato html común a todas las vistas

***header.ejs***
> Contiene formato hmtl común a todas las vistas

***index.ejs***
> Página principal del sitio

***tags.ejs***
> Recorro la variable recibida y muestro los campos de la misma, a  través de un bucle for y con los datos formateados.


##app.js

- Se definen las vistas a través de quién las llama.
- Establezco la ubicación para servir los ficheros estáticos.
- Hace la llamada a la base datos para su conexión.
- Contiene el manejador de errores.
