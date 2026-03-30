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

  constructor(private readonly radius: number) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number.');
    }
    super();
  }

  /**
   * @description Method to draw the circle on the canvas.
   * @param coordinateX - X coordinate of the circle.
   * @param coordinateY - Y coordinate of the circle.
   * @param color - Color of the circle.
   */
  draw(coordinateX: number, coordinateY: number, color: string): void {
    if (!this.context) {
      throw new Error('Could not get the canvas context');
    }

    this.context.beginPath();
    this.context.arc(coordinateX, coordinateY, this.radius, 0, 2 * Math.PI);
    this.context.strokeStyle = color;
    this.context.stroke();
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

}
