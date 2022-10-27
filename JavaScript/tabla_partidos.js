// console.log(partidos)
// console.log(partidos.matches[2])

// let partidosLaLiga = partidos.matches;
// console.log(partidosLaLiga)

// let equipoLocal = partidosLaLiga[0].homeTeam.shortName;
// console.log(equipoLocal)

function getData() {
    let spinner = document.getElementById("loader")
    spinner.style.display = "block"

    const url = "https://api.football-data.org/v2/matches";
    fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": "d5b8d0d5ec5247d2b3e4a3c33edb3ca5",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();

      })
      .then((data) => {
        quitarSpinner()
        let partidosLaLiga = data.matches;
        crearTabla(partidosLaLiga);

      })
      .catch((error) => {
        console.log(error);
        alert("Has recargado demasiadas veces la página")
      });
  }
  getData();

function crearTabla(juego){
    let tbody = document.getElementById("table")
    
    for (let i = 0; i < juego.length; i++) {
let fila = document.createElement("tr")

let país = document.createElement("p")
país.innerHTML = juego[i].competition.area.name;

let competencia = document.createElement("p")
competencia.innerHTML = juego[i].competition.name;

// let tipo = document.createElement("p")
// tipo.innerHTML = juego[i].competition.type;

let equipoLocal = document.createElement("p")
equipoLocal.innerHTML = juego[i].homeTeam.name;

let equipoVisitante = document.createElement("p")
equipoVisitante.innerHTML = juego[i].awayTeam.name;

let imgPais = document.createElement("img")
imgPais.setAttribute("src", juego[i].competition.area.ensignUrl)
imgPais.classList.add("imgEqLocal")

// let imgEquiLocal = document.createElement("img")
// imgEquiLocal.setAttribute("src", juego[i].homeTeam.crest)
// imgEquiLocal.classList.add("imgEqLocal")

// let imgEquiVisit = document.createElement("img")
// imgEquiVisit.setAttribute("src", juego[i].awayTeam.crest)
// imgEquiVisit.classList.add("imgEqLocal")

let jornada = document.createElement("p")
jornada.innerHTML = juego[i].matchday;

let fecha = new Date (juego[i].utcDate);

let datos = [imgPais, país, competencia, jornada, equipoLocal, equipoVisitante, fecha.toLocaleString(),];
// console.log(datos);

for (let j = 0; j < datos.length; j++) {
    let celda = document.createElement("td");
    celda.append(datos[j]);
    fila.append(celda);
}
    tbody.append(fila);
}
}
// crearTabla(partidosLaLiga)
function quitarSpinner(){
    let spinner = document.getElementById("loader")
    spinner.style.display = "none"
}
