# Proyecto 2: Bootcamp Camsite Academy
<p align="center">
 <img src="/Images/LaLiga.svg.png" alt="Logo" width="290" height="105" class="img-fluid justify-content-center"></p>
<h2>LaLiga Web</h2>
<h3>Descripción</h3>          
<p>LaLiga Web es un proyecto que consiste en un Sitio Web donde el usuario puede acceder a una variedad de datos recopilados sobre LaLiga Santander: competición de clubes de fútbol de España, cuyo nombre oficial es "Campeonato Nacional de Liga de Primera División".</p>
Ofrece el acceso a: la clasificación, los resultados, información sobre cada equipo y los próximos partidos más importantes ⚽ .

Permite al usuario el acceso a la página web oficial de LaLiga, a sus redes sociales oficiales y a las páginas web de los distintos equipos que conforman esta competición.

Para visualizar el proyecto...


<h3>Funcionalidades</h3>

- Acceso desde la navbar a todas las páginas oficiales de los clubes de LaLiga desde la imagen del escudo de cada equipo.

- Acceso a la clasificación general de los equipos de LaLiga, donde el usuario podrá visualizar en cualquier momento qué puesto ocupa su equipo.

- Acceso a los resultados de todos los partidos de LaLiga Santander. El usuario puede filtrar los resultados en función del equipo que le interese, así como en función del resultado del mismo : ganados, empatados, perdidos o próximos partidos.


<h3>Tecnologías empleadas</h3>
<p align="center">
 <img src="/Images/Html-JS-CSS-B.jpg" alt="Logo" width="290" height="170" class="img-fluid justify-content-center"></p>

- **HTML5 :** para el esqueleto de la página web.
- **CSS3 :** para el diseño de la interfaz.
- **Bootstrap :** para el diseño de la interfaz y la creación de una web responsive capaz de adaptarse y que pueda ser accesible desde cualquier dispositivo sin que la página se rompa o distorsione.
- **JavaScript :** para dar dinamismo, mayor rendimiento y funcionalidad al sitio web.
- **Postman :** para coger la información y los datos que se muestran en la web (utilizada inicialmente, hasta que se hizo el fetch directamente en los archivos JS).
- **Git y GitHub :** para el control de versiones y repositorio en remoto para trabajar en distintas branches.


<h3>Descripción técnica</h3>
Se han usado dos tipos de funcionalidades : genéricas y específicas.

Como funcionalidades genéricas tenemos las siguientes funciones: ```getData(), crearTabla(), quitarAlert(), quitarSpinner()```

- ```getData()``` usada en todos los archivos JS, es la función encargada de coger los datos en tiempo real de la API, sin necesidad de usar el POSTMAN.

- ```crearTabla()``` es la función encargada de crear la tabla con los equipos, cada vez que queremos filtrarlos por nombre del equipo, o bien los resultados: ganados, empatados, perdidos o próximos partidos.
Interviene cada vez que es accionado alguno de los botones del filtro, pasándole un parámetro ú otro.

- ```quitarAlert()``` usadas en el archivo JS de los resultados, tiene como función ocultar las alertas que aparecen en caso de no encontrar información o de estar mal escrito el equipo en el input.

- ```quitarSpinner()``` usada en todos los archivos JS, en los cuales se cogen datos con la API. Su función es de "parar/ocultar" el spinner después de recibir la respuesta de la API


Como funcionalidades específicas podemos encontrar las siguiente funciones :

- ```filtrarEquipos()``` esta función tiene 2 tareas :

* filtrar los equipos por nombre con los datos introducidos en el input por el usuario
* volver hacer otro filtro de la nueva array creada con los nombres del equipo en función de su resultado

- ```resetFilter()``` usada para resetear todos los filtros, limpiando el campo donde el usuario introduce el nombre de su equipo.
Esta función se usa también en el caso de que alguna de las condiciones no se cumplan y al usuario le salta alguna alerta.


<h3>Versiones</h3>
v1.0 (28.10.2022) - Presentación proyecto


<h3>TO-DO</h3>
<p>- Mejora de diseño</p>
<p>- Tabla con información de los jugadores de cada equipo y filtro de búsqueda</p>
<p>- Filtrar resultados por jornada</p>
<p>- Tabla de estadísticas</p>
