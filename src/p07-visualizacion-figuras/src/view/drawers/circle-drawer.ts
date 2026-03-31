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
 * @description Strategy class for drawing circles - View.
 */

import { Drawer } from './drawer.js';

/**
 * @description Strategy class for drawing circle figures.
 * Implements the Drawer interface to provide circle-specific rendering logic.
 * @class CircleDrawer
 */
export class CircleDrawer implements Drawer {

  /**
   * @description Constructor for CircleDrawer.
   * @param radius - The radius of the circle.
   */
  constructor(private readonly radius: number) {}

  /**
   * @description Draws a circle on the canvas with the specified position and color.
   * @param context - The canvas rendering context.
   * @param coordinateX - X coordinate of the circle's center.
   * @param coordinateY - Y coordinate of the circle's center.
   * @param color - Color to fill the circle with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void {
    context.beginPath();
    context.arc(coordinateX, coordinateY, this.radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }

}
