// console.log(Matches)
// console.log(Matches.matches[0])
// console.log(Matches.matches[0].homeTeam.name)
// console.log(Matches.matches[0].awayTeam.name)
// console.log(Matches.matches[0].score.fullTime.homeTeam)
// console.log(Matches.matches[0].score.fullTime.awayTeam)
// console.log(Matches.matches[0].utcDate)
// console.log(Matches.matches[0].matchday)

// console.log(Matches.matches[0])
// let equipoLocal = Matches.matches[0].homeTeam.name;
// console.log(equipoLocal)
// let equipoVisitante = Matches.matches[0].awayTeam.name;
// console.log(equipoVisitante)
// let resultadoLocal = Matches.matches[0].score.fullTime.homeTeam
// console.log(resultadoLocal)
// let resultadoVisitante = Matches.matches[0].score.fullTime.awayTeam
// console.log(resultadoVisitante)
// let fechaPartido = Matches.matches[0].utcDate
// console.log(fechaPartido)
// let jornada = Matches.matches[0].matchday
// console.log(jornada)

// let Datos = [equipoLocal, equipoVisitante, resultadoLocal, resultadoVisitante, fechaPartido, jornada];
// console.log(Datos); 


// let caja = document.getElementById("caja");
// caja.innerHTML = "Equipo Local";
// console.log(caja);

// let caja1 = document.getElementById("caja1");
// caja1.innerHTML = "Equipo Visitante";
// console.log(caja1);    


// for (let i = 0; i < datosPartido.length; i++) {
//     let equipoLocal = datosPartido[i].homeTeam.name;
// console.log(equipoLocal)
//     let equipoVisitante = datosPartido[i].awayTeam.name;
// console.log(equipoVisitante)
//     let resultadoLocal = datosPartido[i].score.fullTime.homeTeam;
// console.log(resultadoLocal)
//     let resultadoVisitante = datosPartido[i].score.fullTime.awayTeam;
// console.log(resultadoVisitante)
//     let fechaPartido = datosPartido[i].utcDate;
// console.log(fechaPartido)
//     let jornada = datosPartido[i].matchday;
// console.log(jornada)

// let todo = [equipoLocal, equipoVisitante, resultadoLocal, resultadoVisitante,
// fechaPartido, jornada]
// for (let j = 0; j < todo.length; j++) {
//     let nombre = document.createElement("p")
//     nombre.innerHTML = todo[j]
// console.log(nombre)

// caja.append(todo[j])
// }
// }

// let fechaPartido = new Date (Matches.matches[0].utcDate)
// console.log(fechaPartido.toLocaleString())

// let datosPartido = Matches.matches;
// console.log(datosPartido);

quitarAlert1();
quitarAlert2(); 
quitarAlert3();
quitarAlert4();
quitarAlert5();
quitarAlert6();

function getData() {
    let spinner = document.getElementById("loader")
    spinner.style.display = "block"

    const url = "https://api.football-data.org/v2/competitions/2014/matches";
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
        let partidos = data.matches;
        crearTabla(partidos);

        let borrar = document.getElementById("reset")
        borrar.addEventListener("click", () => {
            resetFilter(partidos);
            quitarAlert1()
            quitarAlert2()
            quitarAlert3()
            quitarAlert4()
            quitarAlert5()
            quitarAlert6()
        });
    
        let botonBusqueda = document.getElementById("botonBuscar")
        botonBusqueda.addEventListener("click", () => {
            filtrarEquipos(partidos);
        });

      })
      .catch((error) => {
        console.log(error);
        alert("Has recargado demasiadas veces la página")
      });
  }
  getData();

// TABLA
function crearTabla(results) {
    let cuerpoTabla = document.getElementById("Tabla");
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        let filas = document.createElement("tr");

        let equipoLocal = document.createElement("p");
        equipoLocal.innerHTML = results[i].homeTeam.name;
        equipoLocal.classList.add("Equipos")

        let equipoVisitante = document.createElement("p");
        equipoVisitante.innerHTML = results[i].awayTeam.name;
        equipoVisitante.classList.add("Equipos")

        let imgEqLocal = document.createElement("img");
        imgEqLocal.setAttribute("src", "https://crests.football-data.org/" + results[i].homeTeam.id + ".svg");
        imgEqLocal.classList.add("imgEqLocal");

        let imgEqVisit = document.createElement("img");
        imgEqVisit.setAttribute("src", "https://crests.football-data.org/" + results[i].awayTeam.id + ".svg");
        imgEqVisit.classList.add("imgEqLocal");

        // let resultadoLocal = document.createElement("p");
        // resultadoLocal.innerHTML = results[i].score.fullTime.homeTeam;

        // let resultadoVisitante = document.createElement("p");
        // resultadoVisitante.innerHTML = results[i].score.fullTime.awayTeam;

        let resultado = results[i].score.fullTime.homeTeam + "-" + results[i].score.fullTime.awayTeam;
        if(resultado === "null-null"){
            resultado = "Por jugar"
        }

        let jornada = document.createElement("p")
        jornada.innerHTML = results[i].matchday;

        let fechaPartido = new Date(results[i].utcDate);

        let datosTabla = [imgEqLocal, equipoLocal, resultado, imgEqVisit, equipoVisitante, jornada,
            fechaPartido.toLocaleString(),
        ];
        // console.log(datosTabla)

        for (let j = 0; j < datosTabla.length; j++) {
            let td = document.createElement("td")
            td.append(datosTabla[j]);
            filas.append(td);
        }
        cuerpoTabla.append(filas)
    }

}
// crearTabla(datosPartido)


function filtrarEquipos(match) {
    let inputFiltro = document.querySelector("input[type=text]").value;
    let radioBotones = document.querySelector("input[type=radio]:checked")

    let alerta1 = document.getElementById("alert1")
    let alerta2 = document.getElementById("alert2")
    let alerta3 = document.getElementById("alert3")
    let alerta4 = document.getElementById("alert4")
    let alerta5 = document.getElementById("alert5")
    let alerta6 = document.getElementById("alert6")

    // let ButtonG = document.getElementById("flexRadioDefault1")
    // let ButtonE = document.getElementById("flexRadioDefault2")
    // let ButtonP = document.getElementById("flexRadioDefault3")
    // let ButtonPp = document.getElementById("flexRadioDefault4")

    if(inputFiltro == ""){
        return alerta1.style.display = "block";
    } else{
        alerta1.style.display = "none"
    }
    //if(!isNaN(inputFiltro)){
    //     alert("Introduce sólo letras");
    //     return crearTabla(match);}
    
    let filtroEquipo = match.filter((partido) => {
        if (partido.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) ||
            partido.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase())
        ) {
            return true;
        } 
    });

   if(filtroEquipo.length === 0){
    alerta2.style.display = "block"
        return crearTabla(match);
    } else {
        alerta2.style.display = "none"
    }
    
    if (radioBotones === null){
        return crearTabla(filtroEquipo)
    }

    let filterButtons = filtroEquipo.filter((partido) =>{
        if(radioBotones.value === "ganados"){
            if ((partido.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) 
            && partido.score.winner == "HOME_TEAM") || 
            (partido.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) 
            && partido.score.winner == "AWAY_TEAM")
            ){
                return true;
            } else {
                return false
            }
        }
        if(radioBotones.value === "perdidos"){
            if((partido.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) 
            && partido.score.winner == "AWAY_TEAM") || 
            (partido.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) 
            && partido.score.winner == "HOME_TEAM")
            ){
            return true;
            }
        }
        if(radioBotones.value === "empatados" && partido.score.winner === "DRAW"){
            return true;
        }
        if(radioBotones.value === "proximos" && partido.status === "SCHEDULED"){
            return true;
        }
    });

    if(radioBotones.value === "ganados" && filterButtons.length === 0){
        alerta3.style.display = "block"
        // quitarAlert4()
        // quitarAlert5()
            return crearTabla(filtroEquipo);
        } else{
            alerta3.style.display = "none"
        }
    if(radioBotones.value === "empatados" && filterButtons.length === 0){
        alerta4.style.display = "block"
        // quitarAlert3()
        // quitarAlert5()
            return crearTabla(filtroEquipo);
        } else{
            alerta4.style.display = "none"
        }
    if(radioBotones.value === "perdidos" && filterButtons.length === 0){
        alerta5.style.display = "block"
        // quitarAlert3()
        // quitarAlert4()
            return crearTabla(filtroEquipo);
        } else{
            alerta5.style.display = "none"
        }
    if(radioBotones.value === "próximos" && filterButtons.length === 0){
        alerta6.style.display = "block"
        // quitarAlert3()
        // quitarAlert4()
            return crearTabla(filtroEquipo);
        } else{
            alerta6.style.display = "none"
        }

        crearTabla(filterButtons);
    }

    function resetFilter(partidos){
        document.querySelector("input[type=text]").value = ""

        // OTRAS FORMAS DE "LLAMAR" ELEMENTOS:

        // let input = document.querySelector("input[type=text]")
        // input.value = ""

        // En el HTML darle un id al input y:
        // let inputBusqueda = document.getElementById("campoBusqueda")
        // inputBusqueda.value = ""

        let radioButton = document.getElementsByName("flexRadioDefault")
        for (let i = 0; i < radioButton.length; i++) {
            radioButton[i].checked = false;
        }
        crearTabla(partidos)
    }


    function quitarAlert1(){
        let alerta1 = document.getElementById("alert1")
        alerta1.style.display = "none"
    }    
    function quitarAlert2(){
        let alerta2 = document.getElementById("alert2")
        alerta2.style.display = "none"
    }
    function quitarAlert3(){
        let alerta3 = document.getElementById("alert3")
        alerta3.style.display = "none"
    }
    function quitarAlert4(){
        let alerta4 = document.getElementById("alert4")
        alerta4.style.display = "none";
    }
    function quitarAlert5(){
        let alerta5 = document.getElementById("alert5")
        alerta5.style.display = "none"
    }
    function quitarAlert6(){
        let alerta6 = document.getElementById("alert6")
        alerta6.style.display = "none"
    }

    function quitarSpinner(){
        let spinner = document.getElementById("loader")
        spinner.style.display = "none"
    }


            // function filtrarPartidos(matches)
            // let inputFiltro = document.querySelector("input[type=text]").value;
            // let radioBotones = document.querySelectorAll("input[type=radio]:checked")

            // let filtroBotonesG = matches.filter((partidos) => {
            //         if (radioBotones(checked = "Ganados") && 
            //         (partidos.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) || 
            //         partidos.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase())
            //         ) && (
            //             ((partidos.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) || 
            //             partidos.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase())
            //             ) == partidos.homeTeam.name) && (partidos.score.winner == "HOME_TEAM")
            //          || ((partidos.homeTeam.name.toLowerCase().includes(inputFiltro.toLowerCase()) || 
            //          partidos.awayTeam.name.toLowerCase().includes(inputFiltro.toLowerCase())
            //          ) == partidos.awayTeam.name) && (partidos.score.winner == "AWAY_TEAM"))
            //          ){return true;
            //         } else {
            //              return false;}
            //     });

            // crearTabla(filtroBotonesG);

            // filtrarPartidos(datosPartido);

            // // BÚSQUEDAS

            // let equipoL = datosPartido[0].homeTeam.name;

            // let equipoV = datosPartido[0].awayTeam.name;

            // let inputEquipo = "Sevilla FC"

            // // Buscar todos los partidos del equipo
            // let resultadoLocal = datosPartido[0].score.fullTime.homeTeam;

            // let resultadoVisitante = datosPartido[0].score.fullTime.awayTeam;

            // if(inputEquipo == equipoL || inputEquipo == equipoV){
            //     console.log("partidos de ese equipo")
            // } else{
            //     console.log("No encontrado")
            // }


            // // Buscar partidos ganados de un equipo
            // if((inputEquipo == equipoL) && (resultadoLocal > resultadoVisitante)
            //  || (inputEquipo == equipoV) && (resultadoVisitante > resultadoLocal)){
            //      console.log("partidos ganados de ese equipo")
            // } else{
            //     console.log("No hay partidos ganados")
            // }

            // // Otra forma
            // if((inputEquipo == equipoL) && (datosPartido[99].score.winner == "HOME_TEAM")
            //  || (inputEquipo == equipoV) && (datosPartido[99].score.winner == "AWAY_TEAM")){
            //      console.log("partidos ganados de ese equipo")
            // } else{
            //     console.log("No hay partidos ganados")
            // }


            // // Buscar partidos empatados de un equipo
            // if((inputEquipo == equipoL) && (resultadoLocal == resultadoVisitante)
            //  || (inputEquipo == equipoV) && (resultadoVisitante == resultadoLocal)){
            //      console.log("partidos empatados de ese equipo")
            // } else{
            //     console.log("No hay partidos empatados")
            // }

            // // Buscar partidos perdidos de un equipo
            // if((inputEquipo == equipoL) && (resultadoLocal < resultadoVisitante)
            //  || (inputEquipo == equipoV) && (resultadoVisitante < resultadoLocal)){
            //      console.log("partidos perdidos de ese equipo")
            // } else{
            //     console.log("No hay partidos perdidos")
            // }

            // if((inputEquipo == equipoL) && (datosPartido[0].score.winner !== "HOME_TEAM")
            //  || (inputEquipo == equipoV) && (datosPartido[0].score.winner !== "AWAY_TEAM")){
            //      console.log("partidos ganados de ese equipo")
            // } else{
            //     console.log("No hay partidos ganados")
            // }

            // // Próximos partidos
            // if((inputEquipo == equipoL) && (resultadoLocal == "null")
            //  || (inputEquipo == equipoV) && (resultadoVisitante == "null")){
            //      console.log("partidos aún no jugados de ese equipo")
            // } else {
            //     console.log("No hay partidos aún no jugados")
            // }