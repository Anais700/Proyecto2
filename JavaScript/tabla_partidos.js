console.log(partidos)
console.log(partidos.matches[2])

let partidosLaLiga = partidos.matches;
console.log(partidosLaLiga)

let equipoLocal = partidosLaLiga[0].homeTeam.shortName;
console.log(equipoLocal)

function crearTabla(juego){
    let tbody = document.getElementById("table")
    
    for (let i = 0; i < juego.length; i++) {
let fila = document.createElement("tr")

let país = document.createElement("p")
país.innerHTML = juego[i].area.name;

let competencia = document.createElement("p")
competencia.innerHTML = juego[i].competition.name;

let tipo = document.createElement("p")
tipo.innerHTML = juego[i].competition.type;

let equipoLocal = document.createElement("p")
equipoLocal.innerHTML = juego[i].homeTeam.shortName;

let equipoVisitante = document.createElement("p")
equipoVisitante.innerHTML = juego[i].awayTeam.shortName;

let imgEquiLocal = document.createElement("img")
imgEquiLocal.setAttribute("src", juego[i].homeTeam.crest)
imgEquiLocal.classList.add("imgEqLocal")

let imgEquiVisit = document.createElement("img")
imgEquiVisit.setAttribute("src", juego[i].awayTeam.crest)
imgEquiVisit.classList.add("imgEqLocal")

let jornada = document.createElement("p")
jornada.innerHTML = juego[i].matchday;

let fecha = new Date (juego[i].utcDate);

let datos = [país, competencia, tipo, jornada, imgEquiLocal, equipoLocal, imgEquiVisit, equipoVisitante, fecha.toLocaleString(),];
console.log(datos);

for (let j = 0; j < datos.length; j++) {
    let celda = document.createElement("td");
    celda.append(datos[j]);
    fila.append(celda);
}
    tbody.append(fila);
}
}
crearTabla(partidosLaLiga)
