
function getData() {
  const url = "https://api.football-data.org/v2/competitions/2014/teams";
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
      let partidosLaLiga = data.teams;
      imagenesC(partidosLaLiga);

    })
    .catch((error) => {
      console.log(error);
      alert("Has recargado demasiadas veces la página")
    });
}
getData();


function imagenesC(img) {
    let ImgLogo = document.getElementById("escudos");
  
    for (let i = 0; i < img.length; i++) {
      let div = document.createElement("div");
  
      let logoEquipo = document.createElement("img");
      logoEquipo.classList.add("imgLocal");
      logoEquipo.setAttribute("src", img[i].crestUrl);
  
      let enlace = document.createElement("a");
      enlace.setAttribute("href", img[i].website);
  
      enlace.append(logoEquipo);
      div.append(enlace);
      ImgLogo.append(div);
    }
  }
  // imagenesC(escudos);