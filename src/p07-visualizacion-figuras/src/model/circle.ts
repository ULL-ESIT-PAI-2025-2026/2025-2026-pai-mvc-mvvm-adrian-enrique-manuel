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
 * @description Class that represents a circle - Model.
 */

import { Figure } from './figure.js';

/**
 * @description Class that represents a circle - Model.
 * @class Circle
 */
export class Circle extends Figure {

  /**
   * @description Constructor for Circle.
   * @param radius The radius of the circle.
   * @throws Will throw an error if the radius is not a positive number.
   */
  constructor(private readonly radius: number) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number.');
    }
    super();
  }

  /**
   * @description Method to calculate the area of the circle.
   * @returns The area of the circle.
   */
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  /**
   * @description Method to calculate the perimeter of the circle.
   * @returns The perimeter of the circle.
   */
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * @description Gets the radius of the circle.
   * @returns The radius of the circle.
   */
  getRadius(): number {
    return this.radius;
  }

}
