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

  constructor(private readonly side: number) {
    if (side <= 0) {
      throw new Error('The side must be a positive number.');
    }
    super();
  }

  /**
   * @description Method to draw the square on the canvas.
   * @param coordinateX - X coordinate of the square.
   * @param coordinateY - Y coordinate of the square.
   * @param color - Color of the square.
   */
  draw(coordinateX: number, coordinateY: number, color: string): void {
    if (!this.context) {
      throw new Error('Could not get the canvas context');
    }

    this.context.beginPath();
    this.context.rect(coordinateX, coordinateY, this.side, this.side);
    this.context.fillStyle = color;
    this.context.fill();
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

}
