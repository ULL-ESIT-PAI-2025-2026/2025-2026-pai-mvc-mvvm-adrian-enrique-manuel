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
 * @description Class that represents a triangle - Model.
 */

import { Figure } from './figure.js';

/**
 * @description Class that represents a triangle - Model.
 * @class Triangle
 */
export class Triangle extends Figure {

  constructor(private readonly base: number, private readonly height: number) {
    if (base <= 0 || height <= 0) {
      throw new Error('The base and height must be positive numbers.');
    }
    super();
  }

  /**
   * @description Method to draw the triangle on the canvas.
   * @param coordinateX - X coordinate of the triangle.
   * @param coordinateY - Y coordinate of the triangle.
   * @param color - Color of the triangle.
   */
  draw(coordinateX: number, coordinateY: number, color: string): void {
    if (!this.context) {
      throw new Error('Could not get the canvas context');
    }
    this.context.beginPath();
    this.context.moveTo(coordinateX, coordinateY);
    this.context.lineTo(coordinateX + this.base, coordinateY);
    this.context.lineTo(coordinateX + this.base / 2, coordinateY - this.height);
    this.context.closePath();
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  /**
   * @description Method to calculate the area of the triangle.
   * @returns The area of the triangle.
   */
  calculateArea(): number {
    return (this.base * this.height) / 2;
  }

  /**
   * @description Method to calculate the perimeter of the triangle.
   * @returns The perimeter of the triangle.
   */
  calculatePerimeter(): number {
    const side1 = this.base;
    const side2 = Math.sqrt((this.base / 2) ** 2 + this.height ** 2);
    const side3 = side2;
    return side1 + side2 + side3;
  }

}
