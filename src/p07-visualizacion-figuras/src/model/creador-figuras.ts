/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Enrique Gómez Díaz
 * @since 25 de marzo 2026
 * @desc Implementación de la clase CreadorFiguras - Modelo MVC.
 *
*/

import { Figura } from "./figura.js";
import { Cuadrado } from "./cuadrado.js";
import { Rectangulo } from "./rectangulo.js";
import { Circulo } from "./circulo.js";
import { Triangulo } from "./triangulo.js";
import { Corazon } from "./corazon.js";

/**
 * @description Clase CreadorFiguras que genera figuras geométricas aleatorias - Patrón Factory.
 * @class CreadorFiguras
 */
export class CreadorFiguras {
  static readonly MIN_SIZE: number = 100;
  static readonly MAX_SIZE: number = 300;

  /**
   * @description Genera una figura geométrica aleatoria.
   * @returns Figura geométrica aleatoria.
   */
  static generarFiguraAleatoria(): Figura {
    const tipoFigura: number = getRandomNumber(0, 5);

    switch (tipoFigura) {
      case 0:
        return new Circulo(getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE));
      case 1:
        return new Cuadrado(getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE));
      case 2:
        return new Rectangulo(getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE), getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE));
      case 3:
        return new Triangulo(getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE), getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE));
      case 4:
        return new Corazon(getRandomNumber(CreadorFiguras.MIN_SIZE, CreadorFiguras.MAX_SIZE));
      default:
        throw new Error('Tipo de figura no válido');
    }
  }
}

/**
 * @description Genera un número aleatorio entre dos valores.
 * @param min - Valor mínimo.
 * @param max - Valor máximo.
 * @returns Número aleatorio entre min y max.
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
