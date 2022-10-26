// console.log(classification)
// console.log(classification.standings)
// console.log(classification.standings[0].table[1].team.name)

// let team1 = classification.standings[0].table[0].team.name;
// console.log(team1)
// let pJugados = classification.standings[0].table[0].playedGames;
// console.log(pJugados)
// let pGanados = classification.standings[0].table[0].won;
// console.log(pGanados)
// let pEmpatados = classification.standings[0].table[0].draw;
// console.log(pEmpatados)
// let pPerdidos = classification.standings[0].table[0].lost;
// console.log(pPerdidos)
// let golesAfavor = classification.standings[0].table[0].goalsFor;
// console.log(golesAfavor)
// let golesENcontra = classification.standings[0].table[0].goalsAgainst;
// console.log(golesENcontra)
// let diferenciaGoles = classification.standings[0].table[0].goalDifference;
// console.log(diferenciaGoles)
// let puntos = classification.standings[0].table[0].points;
// console.log(puntos)

// let team2 = classification.standings[0].table[1].team.name;
// console.log(team2) 
// let pJugados1 = classification.standings[0].table[1].playedGames;
// console.log(pJugados1)
// let pGanados1 = classification.standings[0].table[1].won;
// console.log(pGanados1)
// let pEmpatados1 = classification.standings[0].table[1].draw;
// console.log(pEmpatados1)
// let pPerdidos1 = classification.standings[0].table[1].lost;
// console.log(pPerdidos1)
// let golesAfavor1 = classification.standings[0].table[1].goalsFor;
// console.log(golesAfavor1)
// let golesENcontra1 = classification.standings[0].table[1].goalsAgainst;
// console.log(golesENcontra1)
// let diferenciaGoles1 = classification.standings[0].table[1].goalDifference;
// console.log(diferenciaGoles1)
// let puntos1 = classification.standings[0].table[1].points;
// console.log(puntos1)


let datosClasificacion = classification.standings[0].table;
console.log(datosClasificacion)

for (let i = 0; i < datosClasificacion.length; i++){
    let team = datosClasificacion[i].team.name;
console.log(team);
    let posicion = datosClasificacion[i].position;
console.log(posicion)
    let pJugados = datosClasificacion[i].playedGames;
console.log(pJugados)
    let pGanados = datosClasificacion[i].won;
console.log(pGanados)
let pEmpatados = datosClasificacion[i].draw;
console.log(pEmpatados)
let pPerdidos = datosClasificacion[i].lost;
console.log(pPerdidos)
let golesAfavor = datosClasificacion[i].goalsFor;
console.log(golesAfavor)
let golesENcontra = datosClasificacion[i].goalsAgainst;
console.log(golesENcontra)
let diferenciaGoles = datosClasificacion[i].goalDifference;
console.log(diferenciaGoles)
let puntos = datosClasificacion[i].points;
console.log(puntos)

};

function crearTabla(result){
    let tbody = document.getElementById("Table")

    for (let i = 0; i < result.length; i++) {
let fila = document.createElement("tr");

let equipo = document.createElement("p")
equipo.innerHTML = result[i].team.name;
equipo.classList.add("Equip")

let imgEq = document.createElement("img")
imgEq.setAttribute("src", result[i].team.crestUrl);
imgEq.setAttribute("class", "imgEqLocal")
// imgEq.classList.add("imgEqLocal")

let posicion = document.createElement("p")
posicion.innerHTML = result[i].position;

let PJ = document.createElement("p")
PJ.innerHTML = result[i].playedGames;

let PG = document.createElement("p")
PG.innerHTML = result[i].won;

let PE = document.createElement("p")
PE.innerHTML = result[i].draw;

let PP = document.createElement("p")
PP.innerHTML = result[i].lost;

let GF = document.createElement("p")
GF.innerHTML = result[i].goalsFor;

let GC = document.createElement("p")
GC.innerHTML = result[i].goalsAgainst;

let DG = document.createElement("p")
DG.innerHTML = result[i].goalDifference;

let puntos = document.createElement("p")
puntos.innerHTML = result[i].points;

let datosT = [posicion, imgEq, equipo, PJ, PG, PE, PP, 
    GF, GC, DG, puntos]
    
    for (let j = 0; j < datosT.length; j++) {
    let td = document.createElement("td")
    td.append(datosT[j]);
    fila.append(td);
    }
tbody.append(fila)    
    }
}
crearTabla(datosClasificacion)