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
 * @desc Strategy class for drawing squares - View.
 */

import { Drawer } from './drawer.js';

/**
 * Strategy class for drawing square figures.
 * Implements the Drawer interface to provide square-specific rendering logic.
 * @class SquareDrawer
 */
export class SquareDrawer implements Drawer {

  /**
   * Constructor for SquareDrawer.
   * @param side - The side length of the square.
   */
  constructor(private readonly side: number) {}

  /**
   * Draws a square on the canvas with the specified position and color.
   * @param context - The canvas rendering context.
   * @param coordinateX - X coordinate of the square's top-left corner.
   * @param coordinateY - Y coordinate of the square's top-left corner.
   * @param color - Color to fill the square with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void {
    context.beginPath();
    context.rect(coordinateX, coordinateY, this.side, this.side);
    context.fillStyle = color;
    context.fill();
  }

}
