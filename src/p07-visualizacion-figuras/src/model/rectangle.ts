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
 * @description Class that represents a rectangle - Model.
 */

import { Figure } from './figure.js';

/**
 * @description Class that represents a rectangle - Model.
 * @class Rectangle
 */
export class Rectangle extends Figure {

  /**
   * @description Constructor for Rectangle.
   * @param width The width of the rectangle.
   * @param height The height of the rectangle.
   * @throws Will throw an error if the width or height is not a positive number.
   */
  constructor(private readonly width: number, private readonly height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('The width and height must be positive numbers.');
    }
    super();
  }

  /**
   * @description Method to calculate the area of the rectangle.
   * @returns The area of the rectangle.
   */
  calculateArea(): number {
    return this.width * this.height;
  }

  /**
   * @description Method to calculate the perimeter of the rectangle.
   * @returns The perimeter of the rectangle.
   */
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }

  /**
   * @description Gets the width of the rectangle.
   * @returns The width of the rectangle.
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * @description Gets the height of the rectangle.
   * @returns The height of the rectangle.
   */
  getHeight(): number {
    return this.height;
  }

}
