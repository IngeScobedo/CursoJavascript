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

const binaryToDecimal = (number = undefined, base = undefined) => {
  if (base === 2) {
    return console.info(
      `${number} base ${base} = ${parseInt(number, base)} base 10`
    );
  }
};

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
let discount = (total = undefined, percentage = undefined) => {
  if (typeof total !== "number" && typeof percentage !== "number") {
    return console.warn("Solo Puedes Ingresar numeros");
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

const calcYears = (date = undefined) => {
  if (date === undefined) return console.warn("No ingresaste una fecha");
  if (!(date instanceof Date)) return console.error("Ingresa una fecha valida");

  let hoyMenosFecha = new Date().getTime() - date.getTime();
  let yearsMS = 1000 * 60 * 60 * 24 * 365;
  let humanYears = Math.floor(hoyMenosFecha / yearsMS);

  return Math.sign(humanYears === -1)
    ? console.info(
        `Faltan ${Math.abs(humanYears)} años para el ${date.getFullYear()}`
      )
    : Math.sign(humanYears) === 1
    ? console.info(`Han pasado ${humanYears} años desde ${date.getFullYear()}`)
    : console.info(`Estamos en el año actual ${date.getFullYear()}`);
};

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

let vocalsAndConsonants = (text = "") => {
  if (text === "") return console.error("Ingresa un texto");
  if (typeof text !== "string") return console.error("Ingresa solamente texto");
  text = text.toLocaleLowerCase();
  let vocals = 0,
    consonants = 0;

  for (let letter of text) {
    if (/[aeiou]/.test(letter)) vocals++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letter)) consonants++;
  }
  return console.info({
    text,
    vocals,
    consonants,
  });
};

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

let validationName = (name = "") => {
  if (!name) return console.error("No se ingreso un nombre válido");
  if (typeof name !== "string")
    return console.error("Sólo puedes ingresar texto");

  let regExp = /^[A-Za-zÑñ\s]+$/g.test(name);

  return regExp
    ? console.info(`${name} es un nombre valido`)
    : console.info(`${name} no es un nombre valido`);
};

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

let validationEmail = (email = "") => {
  if (!email) return console.error("No se ingreso un nombre válido");
  if (typeof email !== "string")
    return console.error("Sólo puedes ingresar texto");

  let regExp =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return regExp
    ? console.info(`${email} es un correo electronico valido`)
    : console.error(`${email} no es un correo electronico valido`);
};

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

let squared = (array = []) => {
  if (!(array instanceof Array))
    return console.error(
      "Debes de ingresar un array de numeros, si no sera omitido el elemento"
    );

  let newArray = [];

  for (let number of array) {
    if (typeof number === "number") {
      number *= number;
      newArray.push(number);
      console.log(newArray);
    }
  }
};

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

let lowAndHigh = (array = []) => {
  if (!(array instanceof Array))
    return console.error(
      "Debes de ingresar un array de numeros, si no sera omitido el elemento"
    );

  let newArray = [],
    sorted = [];

  if (array) {
    sorted = array.sort((a, b) => a - b);
  }

  newArray.push(sorted[0]);
  newArray.push(sorted[sorted.length - 1]);
  return newArray;
};

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddAndEven = (array = []) => {
  let odd = [],
    even = [];

  for (let number of array) {
    if (number % 2 === 0) {
      odd.push(number);
    } else {
      even.push(number);
    }
  }
  return {
    odd: odd,
    even: even,
  };
};

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

let ascendingAndDescending = (array = []) => {
  let ascending = [],
    descending = [];

  ascending = array.sort();
  descending = array.sort().reverse();
  return {
    ascending,
    descending,
  };
};

/* ############################# PRACTICA DE MAP, FILTER Y REDUCE ############################# */

/* ############################# PRACTICA DE MAP, FILTER Y REDUCE ############################# */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

let numbersDuplicate = [
    1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7,
    7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
  ],
  dup = ["x", "y", "x", "z", "y", 1, 2, 1, 2, 3, 3, 2, 3];

let deleteDuplicates = (array = []) => {
  let duplicates = array.filter((element, position, object) => {
    return position === object.indexOf(element);
  });

  return duplicates;
};

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

let califications = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let average = (array = []) => {
  let sum = 0;

  array.forEach((e) => (sum += e));

  return sum / array.length;
};

/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
                7 restantes números.
              - Valida que el título no rebase los 100 caracteres.
              - Valida que el director no rebase los 50 caracteres.
              - Valida que el año de estreno sea un número entero de 4 dígitos.
              - Valida que el país o paises sea introducidos en forma de arreglo.
              - Valida que los géneros sean introducidos en forma de arreglo.
              - Valida que los géneros introducidos esten dentro de los géneros 
                aceptados*.
              - Crea un método estático que devuelva los géneros aceptados*.
              - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
                decimal de una posición.
              - Crea un método que devuelva toda la ficha técnica de la película.
              - Apartir de un arreglo con la información de 3 películas genera 3 
                instancias de la clase de forma automatizada e imprime la ficha técnica 
                de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/
const ACCEPTED_GENDERS = [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];


class Movie {
  constructor({
    movieId,
    title,
    directors,
    premiere,
    countries,
    gender,
    calification,
  }) {
    this.movieId = movieId;
    this.title = title;
    this.directors = directors;
    this.premiere = premiere;
    this.countries = countries;
    this.gender = gender;
    this.calification = calification;

    this.imdbValidations(movieId);
    this.titleValidations(title);
    this.directorValidations(directors);
    this.premiereValidations(premiere);
    this.countriesValidations(countries);
  }

  static get listOfAcceptedGenders(){
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  static acceptedGenders (){
    return console.info(`The accepted genres are: ${Movie.listOfAcceptedGenders.join(', ')}`)
  }

  stringValidators(property, value) {
    if (!value) return console.warn(`${property} "${value} is empty"`);
    if (typeof value !== "string")
      return console.warn(`${property} "${value}" is not a string`);
    return true;
  }

  stringLenghtValidators(property, value, lenght) {
    if (value.length > lenght)
      return console.error(`${property} "${value} is longer than ${lenght}"`);
    return true;
  }
  yearValidators(property, year) {
    if(!year) return console.error(`${property} "${property}" empty`);
    if(typeof year !== "number") return console.error(`${property} "${year}" is not a valid year`)
    return true;
  }
  arrayValidators(property,array) {
    if(!array) return console.warn(`${property} "${array}" is empty`);
    if(!(array instanceof Array))return console.error(`${property} "${array}" is not an array"`) 
    if(array.length === 0) return console.warn(`$property "${array} is empty"`)
    for(let string of array) {
      if(typeof string !== "string")return console.error(`Value ${string} is not a string`)
    }
    return true;
  }
  gendersValidators(){

  }





  imdbValidations(imdbId) {
    if (this.stringValidators("IMDB ID", imdbId)) {
      if (!/^([a-z]{2}([0-9]{7}))$/.test(imdbId)) {
        return console.error(
          `IMDB ID "${imdbId}" is invalid It must have 9 characters, the first 2 digits letters and the remaining 7 numbers.`
        );
      }
    }
  }
  
  titleValidations(title) {
    if (this.stringValidators("title", title))
      this.stringLenghtValidators("title", title, 100);
  }
  directorValidations(directors) {
    this.arrayValidators("directors", directors)
  }
  premiereValidations(premiere){
    if(this.yearValidators("premiere", premiere))
      if(!(/^([0-9]){4}$/.test(premiere))) return console.error(`Premiere invalid`)
  }
  countriesValidations(countries) {
    this.arrayValidators("countries", countries);
  }
  gendersValidations(genders) {

  }
}

let movie = new Movie({
  movieId: "tt2861424",
  title: 'Rick And Morty (TV Series)',
  directors: ['Dan Harmon','Justin Roiland'],
  premiere: 2013,
  countries: ["USA"]
});
