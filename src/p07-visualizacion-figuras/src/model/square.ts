/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since Mar 20 2026
 * @description Class that represents a square - Model.
 */

import { Figure } from './figure.js';

/**
 * @description Class that represents a square - Model.
 * @class Square
 */
export class Square extends Figure {

  /**
   * @description Constructor for Square.
   * @param side The length of the side of the square.
   * @throws Will throw an error if the side length is not a positive number.
   */
  constructor(private readonly side: number) {
    if (side <= 0) {
      throw new Error('The side must be a positive number.');
    }
    super();
  }

  /**
   * @description Method to calculate the area of the square.
   * @returns The area of the square.
   */
  calculateArea(): number {
    return this.side ** 2;
  }

  /**
   * @description Method to calculate the perimeter of the square.
   * @returns The perimeter of the square.
   */
  calculatePerimeter(): number {
    return 4 * this.side;
  }

  /**
   * @description Gets the side length of the square.
   * @returns The side length of the square.
   */
  getSide(): number {
    return this.side;
  }

}
