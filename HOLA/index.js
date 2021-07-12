/*let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");

let respuestaDelUsuario = (nombre + " " + apellido);

alert(`Hola ${respuestaDelUsuario}, bienvenida a Ada`);

console.log(respuestaDelUsuario);*/

/*let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");

let respuestaDelUsuario = (nombre + " " + apellido);

alert(`Hola ` + respuestaDelUsuario + `, bienvenida a Ada`);

console.log(respuestaDelUsuario);*/

/*let primerGusto = prompt("¿Cuál es el primer gusto?");
let segundoGusto = prompt("¿Cuál es el segundo gusto?");
let tercerGusto = prompt("¿Cuál es el tercer gusto?");

alert(`Aquí tiene su helado de ` + primerGusto + `, ` + segundoGusto + ` y ` + tercerGusto);*/

/*
let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");
let edad = prompt("¿Cuál es tu edad?");
let nacionalidad = prompt("¿Cuál es tu nacionalidad?");
let numeroDeDocumento = prompt("¿Cuál es tu número de documento?");

alert(`El nuevo perfil fue ingresado al sistema: `+ `nombre: ` + nombre + `, apellido: `+ apellido + `, edad: ` + edad + `, nacionalidad: ` + nacionalidad + `, número de documento: ` + numeroDeDocumento);
*/
/*
const nombre = prompt("cual  es tu nombre?");

if(nombre !== "Homero") {
    alert("Bienvenida a la web");
}
*/

/*
let playlist = prompt("¿Cuál es el nombre de la playlist?");
let cancion1 = prompt("¿Cuál es la primera canción?");
let cancion2 = prompt("¿Cuál es la segunda canción?");
let cancion3 = prompt("¿Cuál es la tercera canción?");

alert("Se ha creado la playlist " + playlist + " con las canciones " + cancion1 + ", " + cancion2 + ", " + cancion3);
*/
/*
let base = prompt("Ingresá el valor de la base del triángulo");
let altura = prompt("Ingresá el valor de la altura del triángulo");
const resultado = (base * altura / 2);

alert("El resultado del área del triángulo con base " + base + " y altura " +  " es: " + resultado);
*/

let baseDelRectangulo = prompt("Ingresá el valor de la base del rectángulo");
let alturaDelRectangulo = prompt("Ingresá el valor de la altura del rectángulo");

Number(baseDelRectangulo);
Number(alturaDelRectangulo);

const baseANumero = Number(baseDelRectangulo);
const alturaANumero = Number(alturaDelRectangulo);

const resultado = ((baseANumero + alturaANumero) * 2);

alert("El resultado del perímetro del rectángulo con base " + baseDelRectangulo + " y altura " + alturaDelRectangulo + " es: " + resultado);