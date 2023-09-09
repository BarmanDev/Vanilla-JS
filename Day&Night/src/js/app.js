const imagen = document.getElementById("imagen");
let esDia = true;

function cambiarImagen() {
  if (esDia =!esDia) {
    imagen.src = "./src/img/noche.png"; 
  } else {
    imagen.src = "./src/img/dia.jpg";  
}
}