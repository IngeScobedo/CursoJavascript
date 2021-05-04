/* 
    5) Programa una funcion que invierta las palabras de una cadena de texto, por ejemplo: miFuncion("hola mundo") //odnum aloh
*/
let invertWords = (text = "") => {
  if (text === "" || text === undefined)
    return console.warn("ingresa un texto");
  if (typeof text === "number")
    return console.warn("No puedes ingresar numeros");

  return text.split("").reverse().join("");
};
/* 
    6)Programa una funcion para contar el número de veces que se repite una palabra en un texto largo, 
    por ejemplo: miFuncion("//texto a buscar", "//texto largo para buscar") // total
    miFuncion("fiesta", "Fui a una fiesta, fiesta aburrida", "fiesta" "fiesta") // 4
*/
let findCountText = (text, ...texts) => {
  if (text === "" || text === undefined)
    return console.warn("ingresa un texto");
  if (texts.length === 0) return console.warn("ingresa elementos a analizar");
  let i = 0;
  let count = 0;
  texts.forEach((e) => {
    if (typeof e === "string") {
      i = 0;
      while (i !== -1) {
        i = e.indexOf(text, i);
        if (i !== -1) {
          i++;
          count++;
        }
      }
    }
  });
  return `La palabra ${text} se repite ${count} veces`;
};
/* 
7)Programa una funcion que valide si una palabra o frase dada, es un palindromo 
(que se lee igual en un sentido que en otro)
po. palindromo("salas"); //true
*/
let palindromo = (text) => {
  if (text === "" || text === undefined)
    return console.warn("ingresa un texto");
  if (typeof text === "number")
    return console.warn("No puedes ingresar numeros");

  let textReverse = text.split("").reverse().join("");
  let result = text === textReverse ? true : false;
  return result;
};
/* palindromo("SALAS");*/
/*
    8) programa una funcion que elimine cierto patron de caracteres de un texto dado pe. mi funcion("xyz,xyz1,xyz2,xyz3","xyz") // "1,2,3"
*/
let deletePatterns = (pattern, ...texts) => {
  console.log(typeof pattern);
  if (pattern === undefined)
    return console.warn("ingresa caracteres a eliminar");
  if (typeof pattern !== "string" && typeof pattern !== "number")
    return console.warn("Sólo puedes ingresar texto y numeros");
  if (texts.length === 0) return console.warn("ingresa elementos a analizar");
  let results = [];
  let trash = [];

  texts.forEach((element) => {
    if (typeof pattern === "string") {
      results.push(element.replace(new RegExp(pattern, "gi"), ""));
    }
    if (typeof pattern === "number") {
      let newPattern = pattern.toString();
      if (typeof element === "number") {
        let newElement = element.toString();
        let toPush = parseInt(
          newElement.replace(new RegExp(newPattern, "gi"), "")
        );
        if (isNaN(toPush)) {
          trash.push(toPush);
        } else {
          results.push(toPush);
        }
      }
      if (typeof element === "string") {
        results.push(element.replace(new RegExp(newPattern, "gi"), ""));
      }
    }
  });

  return results;
};

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
let getRandomInt501_601 = () => Math.round(Math.random() * (600 - 501)) + 501;

let getRandomInt = (min = undefined, max = undefined) => {
  if (min === undefined || max === undefined)
    return console.warn("Debes Ingresar Dos Valores");
  if (typeof min !== "number" && typeof max !== "number")
    return console.warn("Sólo Puedes Insertar Numeros");

  return Math.round(Math.random() * (max - min)) + min;
};

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

let capicua = (number = undefined) => {
  if (number === undefined)
    return console.warn("Debes Ingresar Un Número Positivo");
  if (typeof number !== "number")
    return console.warn("Sólo Puedes Ingresar Numeros");
  if (Math.sign(number) === -1)
    return console.warn("Sólo Puedes Ingresar Números Positivos");

  let result =
    number === parseInt(number.toString().split("").reverse().join(""));
  return result;
};

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

let factorial = (number) => {
  if (number === undefined)
    return console.warn("Debes Ingresar Un Número Positivo");
  if (typeof number !== "number")
    return console.error("Sólo Puedes Ingresar Numeros");
  if (Math.sign(number) === -1)
    return console.error("Sólo Puedes Ingresar Números Positivos");
  if (number === 0) return console.error("El Valor No Puede Ser Cero");

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

let impar = (number = undefined) => {
  if (number === undefined) return console.warn("Debes ingresar un número");
  if (typeof number !== "number")
    return console.error("Sólo Puedes Ingresar Números");
  if (number === 0) return console.warn('No puedes ingresar el valor "0"');
  if (number === 1) return console.warn('No puedes ingresar el valor "1"');
  if (Math.sign(number) === -1)
    return console.warn("Sólo Puedes Ingresar Numeros Positivos");

  let result = number % 3 === 0 ? true : false;
  return result;
};

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

let parOImpar = (number) => {
  if (number === undefined) return console.warn("Debes ingresar un número");
  if (typeof number !== "number")
    return console.error("Sólo Puedes Ingresar Números");
  if (number === 0) return console.warn('No puedes ingresar el valor "0"');
  if (Math.sign(number) === -1)
    return console.warn("Sólo Puedes Ingresar Numeros Positivos");
  let result = number % 2 === 0 ? "Par" : "impar";
  return result;
};

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

let temperatureConversor = (number = undefined, system = undefined) => {
  if (number === undefined) {
    return console.error("Debes Ingresar un numero para convertir");
  }
  if (typeof number !== "number") {
    return console.error("Debes Ingresar sólo numeros");
  }

  if (system === undefined) {
    return console.error(
      "Debes Ingresar a que tipo de medida convertir;\n'C': Celsius\n'F': Fahrenheit"
    );
  }
  if (typeof system !== "string") {
    return console.error(
      "Debes Ingresar a que tipo de medida convertir en string...\n'C': Celsius\n'F': Fahrenheit"
    );
  }
  system = system.toUpperCase();
  let result = 0;
  if (system === "F") {
    result = number * 1.8 + 32;
    return `${result}°${system}`;
  } else if (system === "C") {
    result = (number - 32) / 1.8;
    return `${result}°${system}`;
  } else {
    console.error("Valor de unidad no reconocido");
  }
};

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
let discount = (total = undefined, percentage = undefined) => {
  if (typeof total !== 'number' && typeof percentage !== 'number'){
    return console.warn('Solo Puedes Ingresar numeros');
  }
  if (total === undefined) {
    return console.error("Debes ingresar cantidad para el descuento");
  }
  if (percentage === undefined) {
    return console.error("Debes ingresar porcentaje a descontar");
  }


  let rest = (total / 100) * percentage;
  let result = total - rest;
  return result;
};

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
