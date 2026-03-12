import random  # gives us tools for picking random numbers

# ----------------------------
# Guess the Number (Beginner Demo)
# ----------------------------
# The computer picks a secret number.
# The player keeps guessing until they find it.

MIN_NUMBER = 1
MAX_NUMBER = 20

secret = random.randint(MIN_NUMBER, MAX_NUMBER)  # a <= secret <= b
tries = 0
guess = 0  # start with a value that cannot be the secret (since secret is 1..20)

print("I'm thinking of a number between", MIN_NUMBER, "and", MAX_NUMBER)

# Repeat until the user guesses the secret number.
while guess != secret:
    text = input("Take a guess: ")  # input() returns text (a string)

    # If the user didn't type digits, we avoid crashing and ask again.
    if not text.isdigit():  # True only if all characters are digits
        print("Please type a whole number (like 7).")
    else:
        guess = int(text)  # convert the text to a number
        tries = tries + 1  # add 1 try (written long-form for clarity)

        # Give a hint using if / elif / else.
        if guess < MIN_NUMBER or guess > MAX_NUMBER:
            print("That number is out of range. Try again.")
        elif guess < secret:
            print("Too low, try again.")
        elif guess > secret:
            print("Too high, try again.")
        else:
            print("You got it in", tries, "tries!")

'''Python é uma linguagem de programação de alto nível (mais fácil de entender, esconde detalhes do hardware) e de propósito geral, usada em:

aplicações web

automação (scripts)

ciência de dados e IA

Projeto da aula

Criar um jogo “Adivinhe o Número”:

O computador escolhe um número aleatório entre 1 e 20.

O usuário tenta adivinhar.

O programa informa se o palpite é muito alto, muito baixo ou correto.

O jogo continua até o usuário acertar.

Conceitos de programação aprendidos
1. Variáveis

Guardam valores na memória.

Exemplos:

secret → número secreto

guess → palpite do usuário

tries → número de tentativas

2. Número aleatório

Python pode gerar números aleatórios usando a biblioteca random.

Exemplo:
random.randint(1,20) → gera um número entre 1 e 20.

3. Entrada do usuário

O programa recebe dados digitados pelo usuário.

Exemplo:

input() lê texto

int() converte o texto para número

4. Condições (decisões)

Usadas para comparar valores e decidir o que fazer.

Estrutura:

if → primeira condição

elif → outra condição

else → caso contrário

Exemplos de verificações:

número fora do intervalo

palpite menor que o segredo

palpite maior que o segredo

palpite correto

5. Loops (iterações)

Permitem repetir código várias vezes.

No jogo usamos:

while guess != secret

O programa continua pedindo palpites até o usuário acertar.'''