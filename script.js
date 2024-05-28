'use strict';

// Zadatak 1.

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatska = false;

if (engleski && manjeOd50M && nijeOtok && hrvatska) {
  console.log('Zemlja u kojoj želite živjeti je Hrvatska.');
} else {
  console.log('Hrvatska nije za vas.');
}

// Zadatak 2.

// Barca: 2, 3, 1, 3, 4;
// Real: 1, 4, 1, 5, 0;

// Barca: 1, 2, 1, 1, 3;
// Real: 1, 1, 3, 0, 2;

const avgBarca = (2 + 3 + 1 + 3 + 4) / 5;
console.log(avgBarca);
const avgReal = (1 + 4 + 1 + 5 + 0) / 5;
console.log(avgReal);
let minRez = 3;
let minScore = 5;

// if (avgBarca > avgReal && avgBarca !== avgReal && avgBarca > minRez) {
//   console.log('Barca je pobijedila');
// } else if (avgReal > avgBarca && avgReal !== avgBarca && avgReal > minRez) {
//   console.log('Real je pobjedia');
// } else {
//   console.log('Izjednaceno je');
// }

if (avgBarca > avgReal && avgBarca !== avgReal && avgBarca > minRez) {
  console.log('Barca je pobijedila');
} else if (avgReal > avgBarca && avgReal !== avgBarca && avgReal > minRez) {
  console.log('Real je pobjedia');
} else if (
  avgBarca === avgReal &&
  avgBarca > minRez &&
  avgBarca > minScore &&
  avgReal > minScore
) {
  console.log('Izjednaceno je, te su obje ekipe su postigle vise od 5 golova');
} else {
  console.log('Nema pobjednika');
}

// Zadatak 3.

let tips1 = 15 / 100;
let tips2 = 20 / 100;

let tips;
let total;
let racun = 40;

tips = racun >= 50 && racun <= 300 ? tips1 : tips2;
total = racun * tips;
console.log(tips, total);

console.log(`Iznos racuna je ${racun}, a finalni racun je ${total + racun}`);

// Zadatak 4.

const lovci = 1000;

const brLovaca1 = 340; // Središnja Hrvatska
const brLovaca2 = 50; // Istra
const brLovaca3 = 140; // Dalmacija
const postotakNiz =
  []; /* Ovdje smo napravili prazan niz te cemo kasni ubaciti vrijednosti metodom push */

function izracun(brLovaca1, brLovaca2, brLovaca3) {
  let postotak1 = (brLovaca1 / lovci) * 100;
  console.log(postotak1); /* Namjerno nisam izbrisao*/
  let postotak2 = (brLovaca2 / lovci) * 100;
  let postotak3 = (brLovaca3 / lovci) * 100;
  return [postotak1, postotak2, postotak3];
}

const postotak = izracun(brLovaca1, brLovaca2, brLovaca3);
console.log(postotak);

postotakNiz.push(postotak[0], postotak[1], postotak[2]);
console.log(postotakNiz);

console.log(
  `Iz Sredisnje hrvatske dolazi ${postotak[0]}%, iz Istre dolazi ${postotak[1]}% i iz Dalmacije dolazi ${postotak[2]}% lovaca`
);

// Zadatak 5.

const hrLovci = 7900;

const brojL1 = 3840;
const brojL2 = 500;
const brojL3 = 1440;

const postotakL = (brojL1, brojL2, brojL3) => [
  (brojL1 / hrLovci) * 100,
  (brojL2 / hrLovci) * 100,
  (brojL3 / hrLovci) * 100,
];

const p = postotakL(brojL1, brojL2, brojL3);
console.log(p);
