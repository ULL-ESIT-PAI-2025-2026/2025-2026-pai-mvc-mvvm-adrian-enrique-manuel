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

  constructor(private readonly width: number, private readonly height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('The width and height must be positive numbers.');
    }
    super();
  }

  /**
   * @description Method to draw the rectangle on the canvas.
   * @param coordinateX - X coordinate of the rectangle.
   * @param coordinateY - Y coordinate of the rectangle.
   * @param color - Color of the rectangle.
   */
  draw(coordinateX: number, coordinateY: number, color: string): void {
    if (!this.context) {
      throw new Error('Could not get the canvas context');
    }

    this.context.beginPath();
    this.context.rect(coordinateX, coordinateY, this.width, this.height);
    this.context.strokeStyle = color;
    this.context.stroke();
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

}
