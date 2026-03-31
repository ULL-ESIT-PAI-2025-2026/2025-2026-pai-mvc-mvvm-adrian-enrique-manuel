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
 * @desc Class that represents a triangle - Model.
 */

import { Figure } from './figure.js';

/**
 * Class that represents a triangle - Model.
 * @class Triangle
 */
export class Triangle extends Figure {

  /**
   * Constructor for Triangle.
   * @param base The base of the triangle.
   * @param height The height of the triangle.
   * @throws Will throw an error if the base or height is not a positive number.
   */
  constructor(private readonly base: number, private readonly height: number) {
    if (base <= 0 || height <= 0) {
      throw new Error('The base and height must be positive numbers.');
    }
    super();
  }

  /**
   * Method to calculate the area of the triangle.
   * @returns The area of the triangle.
   */
  calculateArea(): number {
    return (this.base * this.height) / 2;
  }

  /**
   * Method to calculate the perimeter of the triangle.
   * @returns The perimeter of the triangle.
   */
  calculatePerimeter(): number {
    const side1 = this.base;
    const side2 = Math.sqrt((this.base / 2) ** 2 + this.height ** 2);
    const side3 = side2;
    return side1 + side2 + side3;
  }

  /**
   * Gets the base of the triangle.
   * @returns The base of the triangle.
   */
  getBase(): number {
    return this.base;
  }

  /**
   * Gets the height of the triangle.
   * @returns The height of the triangle.
   */
  getHeight(): number {
    return this.height;
  }

}
