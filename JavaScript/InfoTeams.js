let EquiposLaLiga = equipos.teams;
console.log(EquiposLaLiga)

let Team = EquiposLaLiga[0].squad
let Team1 = EquiposLaLiga[1].squad
let Team2 = EquiposLaLiga[2].squad
let Team3 = EquiposLaLiga[3].squad
let Team4 = EquiposLaLiga[4].squad
let Team5 = EquiposLaLiga[5].squad
let Team6 = EquiposLaLiga[6].squad
let Team7 = EquiposLaLiga[7].squad
let Team8 = EquiposLaLiga[8].squad
let Team9 = EquiposLaLiga[9].squad
let Team10 = EquiposLaLiga[10].squad
let Team11 = EquiposLaLiga[11].squad
let Team12 = EquiposLaLiga[12].squad
let Team13 = EquiposLaLiga[13].squad
let Team14 = EquiposLaLiga[14].squad
let Team15 = EquiposLaLiga[15].squad
let Team16 = EquiposLaLiga[16].squad
let Team17 = EquiposLaLiga[17].squad
let Team18 = EquiposLaLiga[18].squad
let Team19 = EquiposLaLiga[19].squad
console.log(Team19)

function crearTabla(jugar){
    let Tbody = document.getElementById("Tabla")

    for (let i = 0; i < jugar.length; i++) {
        let fila = document.createElement("tr")
        
        let equipo = document.createElement("p")
        equipo.innerHTML = jugar[i].name;
        
        let logo = document.createElement("img")
        logo.setAttribute("src", jugar[i].crest)
        logo.classList.add("imgEqLocal")

        let entrenador = document.createElement("p")
        entrenador.innerHTML = jugar[i].coach.name;

        let players = document.createElement("p")
        players.innerHTML = jugar[i].team

            let datosTabla =[logo, equipo, entrenador, players];

            for (let k = 0; k < datosTabla.length; k++) {
                let td = document.createElement("td")
                td.append(datosTabla[k]);
                fila.append(td);
            }
            Tbody.append(fila)
        }       
    }
crearTabla(EquiposLaLiga);


function crearTabla1(jugador){
    let body = document.getElementById("bodyTable")
    body.innerHTML = ""

    for (let i = 0; i < jugador.length; i++) {
        let fila = document.createElement("tr")
        
        let nombre = document.createElement("p")
        nombre.innerHTML = jugador[i].name;
        
        let posicion = document.createElement("p")
        posicion.innerHTML = jugador[i].position;

        let nacionalidad = document.createElement("p")
        nacionalidad.innerHTML = jugador[i].nationality

            let datosTabla =[nombre, posicion, nacionalidad];

            for (let j = 0; j < datosTabla.length; j++) {
                let td = document.createElement("td")
                td.append(datosTabla[j]);
                fila.append(td);
            }
            body.append(fila)
        }       
    }
crearTabla1(Team)

function filtroEquipo(players){
    let inputFiltro = document.querySelector("input[type=text]").value;

    let filterPlayers = players.filter((play) =>{
        if (
            play.name.toLocaleLowerCase().includes(inputFiltro.toLocaleLowerCase()) 
            && play.name.toLocaleLowerCase() == "athletic club"
        ) {
            return crearTabla1(Team)
        } else
        if (
            play.name.toLocaleLowerCase().includes(inputFiltro.toLocaleLowerCase()) 
            && play.name.toLocaleLowerCase() == "club atlético de madrid" || "club atletico de madrid"
        ) {
            return crearTabla1(Team1)
        }

    });
        if (
            EquiposLaLiga.name == inputFiltro 
            && EquiposLaLiga.name == "ca osasuna"
        ) {
            return crearTabla1(Team4)
        } 

    if(inputFiltro == ""){
        alert("Introduce el nombre de un equipo")
        return crearTabla(filterPlayers)
    }
}
    let boton = document.getElementById("botonBuscar")
    boton.addEventListener("click", () => {
        filtroEquipo(EquiposLaLiga)
    })
        //     if (
        //     play.name.toLocaleLowerCase() == "athletic club"
        // ){
        //     return crearTabla1(Team)
        // }
        // if (
        //     play.name.toLocaleLowerCase() == "club atlético de madrid" || "club atletico de madrid"
        // ){
        //     return crearTabla1(Team1)
        // }
        // if (
        //     play.name.toLocaleLowerCase() == "ca osasuna"
        // ){
        //     return crearTabla1(Team2)
        // }
        // if (
        //     play.name.toLocaleLowerCase() == "rcd espanyol de barcelona"
        // ){
        //     return crearTabla1(Team3)
        // }