import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// ----------------------------
// Guess the Number (Beginner Demo)
// ----------------------------
// The computer picks a secret number.
// The player keeps guessing until they find it.

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

const rl = readline.createInterface({ input, output });

try {
  const secret =
    Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER; // MIN_NUMBER <= secret <= MAX_NUMBER
  let tries = 0;
  let guess = 0; // start with a value that cannot be the secret (since secret is 1..20)

  console.log("I'm thinking of a number between", MIN_NUMBER, "and", MAX_NUMBER);

  // Repeat until the user guesses the secret number.
  while (guess !== secret) {
    const text = await rl.question("Take a guess: "); // rl.question() returns text (a string)

    // If the user didn't type digits, we avoid crashing and ask again.
    if (!/^\d+$/.test(text)) { // True only if all characters are digits
      console.log("Please type a whole number (like 7).");
    } else {
      guess = parseInt(text, 10); // convert the text to a number
      tries = tries + 1; // add 1 try

      // Give a hint using if / else if / else.
      if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
        console.log("That number is out of range. Try again.");
      } else if (guess < secret) {
        console.log("Too low, try again.");
      } else if (guess > secret) {
        console.log("Too high, try again.");
      } else {
        console.log("You got it in", tries, "tries!");
      }
    }
  }
} finally {
  rl.close();
}

/* - Introdução ao JavaScript

https://tryhackme.com/room/javascriptsimpledemo

JavaScript é uma linguagem popular usada em páginas web (navegador) e no lado do servidor com Node.js.

Objetivo: aprender variáveis, constantes, condicionais e loops criando um jogo de adivinhação de números.

Conceitos básicos
1️⃣ Variáveis e constantes

Variável: espaço na memória que pode mudar.

let tries = 0;   // número de tentativas
let guess = 0;   // palpite do usuário

Constante: valor fixo que não muda.

const secret = Math.floor(Math.random() * 20) + 1; // número secreto 1–20

Math.random() gera decimal 0–1, Math.floor() arredonda para baixo.

2️⃣ Entrada do usuário

Node.js não espera entrada automaticamente → usamos readline com promises:

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const text = await rl.question("Take a guess: "); // retorna string
guess = parseInt(text, 10); // converte para número

Sempre fechar a interface ao final:

rl.close();
3️⃣ Condicionais (if, else if, else)

Usadas para tomar decisões.

if (guess < 1 || guess > 20) {
    console.log("Out of range");
} else if (guess < secret) {
    console.log("Too low");
} else if (guess > secret) {
    console.log("Too high");
} else {
    console.log("You got it!");
}

Fluxo:

if → condição principal

else if → outras condições

else → caso todas anteriores sejam falsas

4️⃣ Loops (while)

Repetem ações enquanto a condição é verdadeira.

while (guess !== secret) {
    const text = await rl.question("Take a guess: ");
    guess = parseInt(text, 10);
    tries++;

    if (guess < 1 || guess > 20) {
        console.log("Out of range");
    } else if (guess < secret) {
        console.log("Too low");
    } else if (guess > secret) {
        console.log("Too high");
    } else {
        console.log("You got it in", tries, "tries!");
    }
}

!== significa diferente de.

Resumo do jogo “Adivinhe o Número”

Gerar número secreto (1–20) → const secret.

Declarar variáveis → tries, guess.

Pedir palpite do usuário e converter → parseInt().

Dar feedback usando condicionais.

Repetir até o usuário acertar → while (guess !== secret).

Fechar interface → rl.close().

Exemplo de execução
I'm thinking of a number between 1 and 20
Take a guess: 10
Too low, try again.
Take a guess: 15
Too high, try again.
Take a guess: 14
You got it in 3 tries! */