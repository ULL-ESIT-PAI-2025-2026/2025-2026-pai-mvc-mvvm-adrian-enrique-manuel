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
 * @desc Strategy class for drawing rectangles - View.
 */

import { Drawer } from './drawer.js';

/**
 * Strategy class for drawing rectangle figures.
 * Implements the Drawer interface to provide rectangle-specific rendering logic.
 * @class RectangleDrawer
 */
export class RectangleDrawer implements Drawer {

  /**
   * Constructor for RectangleDrawer.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  constructor(private readonly width: number, private readonly height: number) {}

  /**
   * Draws a rectangle on the canvas with the specified position and color.
   * @param context - The canvas rendering context.
   * @param coordinateX - X coordinate of the rectangle's top-left corner.
   * @param coordinateY - Y coordinate of the rectangle's top-left corner.
   * @param color - Color to fill the rectangle with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void {
    context.beginPath();
    context.rect(coordinateX, coordinateY, this.width, this.height);
    context.fillStyle = color;
    context.fill();
  }

}
