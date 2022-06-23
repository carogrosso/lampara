var lamparaPrendida = document.getElementById("lampara-on");
var lamparaApagada = document.getElementById("lampara-off");
var botonPrender = document.getElementById("boton-on");
var botonApagar = document.getElementById("boton-off");

botonPrender.addEventListener("click", prenderLuz)
botonApagar.addEventListener("click", apagarLuz)

function prenderLuz(){
    lamparaApagada.classList.add("display-none");
    lamparaPrendida.classList.remove("display-none");
    botonApagar.classList.remove("display-none");
    botonPrender.classList.add("display-none");
    document.body.style.backgroundColor = "white";
}

function apagarLuz(){
    lamparaApagada.classList.remove("display-none");
    lamparaPrendida.classList.add("display-none");
    botonApagar.classList.add("display-none");
    botonPrender.classList.remove("display-none");
    document.body.style.backgroundColor = "black";
}
