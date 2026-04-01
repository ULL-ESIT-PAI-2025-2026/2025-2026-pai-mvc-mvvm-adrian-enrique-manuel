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

import { Figure } from "./p07-figure.js";
import { Square } from "./p07-square.js";
import { Rectangle } from "./p07-rectangle.js";
import { Circle } from "./p07-circle.js";
import { Triangle } from "./p07-triangle.js";
import { Heart } from "./p07-heart.js";

/**
 * FigureCreator class that generates random geometric figures - Factory Pattern.
 */
export class FigureCreatorModel {
  static readonly MIN_SIZE: number = 100;
  static readonly MAX_SIZE: number = 300;

  /**
   * Generates a random geometric figure.
   * @returns A random geometric figure.
   */
  generateRandomFigure(): Figure {
    const figureType: number = getRandomNumber(0, 5);

    switch (figureType) {
      case 0:
        return new Circle(getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE));
      case 1:
        return new Square(getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE));
      case 2:
        return new Rectangle(getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE), getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE));
      case 3:
        return new Triangle(getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE), getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE));
      case 4:
        return new Heart(getRandomNumber(FigureCreatorModel.MIN_SIZE, FigureCreatorModel.MAX_SIZE));
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
