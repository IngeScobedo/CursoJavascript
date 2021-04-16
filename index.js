/* 
    5) Programa una funcion que invierta las palabras de una cadena de texto, por ejemplo: miFuncion("hola mundo") //odnum aloh
*/

let invertWords = (text = "") => text.split("").reverse().join("");
/* console.log(invertWords("Hola Mundo")); //odnuM aloH */

/* 
    6)Programa una funcion para contar el número de veces que se repite una palabra en un texto largo, 
    por ejemplo: miFuncion("//texto a buscar", "//texto largo para buscar") // total
    miFuncion("fiesta", "Fui a una fiesta, fiesta aburrida", "fiesta" "fiesta") // 4
*/
let findCountText = (text, ...texts) => {
  let i = 0,
    count = 0;
  texts.forEach((e) => {
    i = 0;
    while (i !== -1) {
      i = e.indexOf(text, i);
      if (i !== -1) {
        i++;
        count++;
      }
    }
  });
  return console.log(`La palabra ${text} se repite ${count} veces`);
};
findCountText("hola", "hola mundo hola", "hola mundo hola");

//Esta funcion busca si existe la palabra en el texto o en la serie de textos que les pases ya que tiene un parametro rest
let isTheWord = (text, ...texts) => {
  let count = 0;
  texts.forEach((e) => (e.indexOf(text) >= 0 ? count++ : count));
  return count;
};

/* 
7)Programa una funcion que valide si una palabra o frase dada, es un palindromo 
(que se lee igual en un sentido que en otro)
po. palindromo("salas"); //true
*/

let palindromo = (text) => {
  let textPlain = text.split("");
  console.log(textPlain);
  let textReverse = text.split("").reverse();
  console.log(textReverse);
  if (textPlain === textReverse) {
    return "hola";
  }
};

/* palindromo("SALAS");*/

/*
    8) programa una funcion que elimine cierto patron de caracteres de un texto dado pe. mi funcion("xyz,xyz1,xyz2,xyz3","xyz") // "1,2,3"
*/

let deletePatterns = (pattern, ...texts) => {
  let results = [];
  texts.forEach(element => results.push(element.replace(new RegExp(pattern,"gi"),"")))
  return console.log(results.join(" - "));
}

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */