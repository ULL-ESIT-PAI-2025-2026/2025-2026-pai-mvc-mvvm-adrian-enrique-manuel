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
 * @desc Class that represents a rectangle - Model.
 */

import { Figure } from './p07-figure.js';

/**
 * Class that represents a rectangle - Model.
 */
export class Rectangle extends Figure {

  /**
   * Constructor for Rectangle.
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
   * Method to calculate the area of the rectangle.
   * @returns The area of the rectangle.
   */
  calculateArea(): number {
    return this.width * this.height;
  }

  /**
   * Method to calculate the perimeter of the rectangle.
   * @returns The perimeter of the rectangle.
   */
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }

  /**
   * Gets the width of the rectangle.
   * @returns The width of the rectangle.
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * Gets the height of the rectangle.
   * @returns The height of the rectangle.
   */
  getHeight(): number {
    return this.height;
  }

}
