# ItAcademySprint06
S6.Intro Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

# Nivel 1 
## Ejercicio 1 
1. Crear dos components: Home i Escena.
2. Carregar el component Home dins del component App.
3. Dins del component Home, carregar el component Escena (el component Escena serà fill del component Home).
4. El component Escena haurà de contenir aquesta frase en el template (html):
## Ejercicio 2
1. Llegirem les dades d'un arxiu JSON o definirem una variable amb aquest array de textos (recordar crear una interface) de la història en el component Home:
2. Has de passar aquest array de frases al component fill anomenat "Escena" utilitzant @input.
3. Fent servir la directiva ngFor en el component Escena hauràs de renderitzar totes les frases en un llistat.
## Ejercicio 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component, ha de quedar així:
## Ejercicio 4
Mostrarem totes les línies de l'aplicació i marcarem amb destacarem la frase actual a mesura que cliquem els botons d'avançar o retrocedir:

Ajuda: Hauràs de crear dos mètodes: prev i next en el component Escena que modifiqui una variable currentSentence, que és la que controla en quina frase estem.

Utilitzant aquesta variable hauràs de variar l'estil de la línia pertinent en el llistat que forma part del ngFor.
 
 Per saber més
Sobre com aplicar un ngClass dins d'un ngFor.->Angular 2, using ngClass with conditionals in ngFor