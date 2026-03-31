/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since Mar 31 2026
 * @description Strategy class for drawing triangles - View.
 */

import { Drawer } from './drawer.js';

/**
 * @description Strategy class for drawing triangle figures.
 * Implements the Drawer interface to provide triangle-specific rendering logic.
 * @class TriangleDrawer
 */
export class TriangleDrawer implements Drawer {

  /**
   * @description Constructor for TriangleDrawer.
   * @param base - The base of the triangle.
   * @param height - The height of the triangle.
   */
  constructor(private readonly base: number, private readonly height: number) {}

  /**
   * @description Draws a triangle on the canvas with the specified position and color.
   * @param context - The canvas rendering context.
   * @param coordinateX - X coordinate of the triangle's base start point.
   * @param coordinateY - Y coordinate of the triangle's base start point.
   * @param color - Color to fill the triangle with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void {
    context.beginPath();
    context.moveTo(coordinateX, coordinateY);
    context.lineTo(coordinateX + this.base, coordinateY);
    context.lineTo(coordinateX + this.base / 2, coordinateY - this.height);
    context.closePath();
    context.fillStyle = color;
    context.fill();
  }

}
