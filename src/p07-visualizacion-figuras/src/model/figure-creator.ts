/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since 25 de marzo 2026
 * @desc Implementation of the FigureCreator class - MVC Model.
 *
*/

import { Figure } from "./figure.js";
import { Square } from "./square.js";
import { Rectangle } from "./rectangle.js";
import { Circle } from "./circle.js";
import { Triangle } from "./triangle.js";
import { Heart } from "./heart.js";

/**
 * FigureCreator class that generates random geometric figures - Factory Pattern.
 * @class FigureCreator
 */
export class FigureCreator {
  static readonly MIN_SIZE: number = 100;
  static readonly MAX_SIZE: number = 300;

  /**
   * Generates a random geometric figure.
   * @returns A random geometric figure.
   */
  static generateRandomFigure(): Figure {
    const figureType: number = getRandomNumber(0, 5);

    switch (figureType) {
      case 0:
        return new Circle(getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE));
      case 1:
        return new Square(getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE));
      case 2:
        return new Rectangle(getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE), getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE));
      case 3:
        return new Triangle(getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE), getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE));
      case 4:
        return new Heart(getRandomNumber(FigureCreator.MIN_SIZE, FigureCreator.MAX_SIZE));
      default:
        throw new Error('Invalid figure type');
    }
  }
}

/**
 * Generates a random number between two values.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns A random number between min and max.
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
