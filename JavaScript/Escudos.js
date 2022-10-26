let escudos = equipos.teams

function imagenesC(img) {
    let ImgLogo = document.getElementById("escudos");
  
    for (let i = 0; i < img.length; i++) {
      let div = document.createElement("div");
  
      let logoEquipo = document.createElement("img");
      logoEquipo.classList.add("imgLocal");
      logoEquipo.setAttribute("src", img[i].crest);
  
      let enlace = document.createElement("a");
      enlace.setAttribute("href", img[i].website);
  
      enlace.append(logoEquipo);
      div.append(enlace);
      ImgLogo.append(div);
    }
  }
  imagenesC(escudos);