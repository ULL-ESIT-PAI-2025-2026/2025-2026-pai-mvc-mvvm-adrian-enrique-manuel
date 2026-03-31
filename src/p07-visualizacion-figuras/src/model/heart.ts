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
 * @description Class that represents a heart - Model.
 */

import { Figure } from './figure.js';

/**
 * @description Class that represents a heart - Model.
 * @class Heart
 */
export class Heart extends Figure {

  /**
   * @description Constructor for Heart.
   * @param radius The radius of the heart.
   * @throws Will throw an error if the radius is not a positive number.
   */
  constructor(private readonly radius: number) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number.');
    }
    super();
  }

  /**
   * @description Method to calculate the area of the heart.
   * @returns The area of the heart.
   */
  calculateArea(): number {
    return (Math.PI * this.radius ** 2) / 2;
  }

  /**
   * @description Method to calculate the perimeter of the heart.
   * @returns The perimeter of the heart.
   */
  calculatePerimeter(): number {
    return Math.PI * this.radius;
  }

  /**
   * @description Gets the radius of the heart.
   * @returns The radius of the heart.
   */
  getRadius(): number {
    return this.radius;
  }

}
