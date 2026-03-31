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
 * @description Strategy class for drawing hearts - View.
 */

import { Drawer } from './drawer.js';

/**
 * @description Strategy class for drawing heart figures.
 * Implements the Drawer interface to provide heart-specific rendering logic.
 * @class HeartDrawer
 */
export class HeartDrawer implements Drawer {

  /**
   * @description Constructor for HeartDrawer.
   * @param radius - The radius of the heart.
   */
  constructor(private readonly radius: number) {}

  /**
   * @description Draws a heart on the canvas with the specified position and color.
   * @param context - The canvas rendering context.
   * @param coordinateX - X coordinate of the heart's center.
   * @param coordinateY - Y coordinate of the heart's center.
   * @param color - Color to fill the heart with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void {
    context.beginPath();
    context.moveTo(coordinateX, coordinateY);
    context.bezierCurveTo(coordinateX, coordinateY - this.radius / 2, coordinateX - this.radius / 2, coordinateY - this.radius / 2, coordinateX - this.radius / 2, coordinateY);
    context.bezierCurveTo(coordinateX - this.radius / 2, coordinateY + this.radius / 2, coordinateX, coordinateY + this.radius / 2, coordinateX, coordinateY + this.radius);
    context.bezierCurveTo(coordinateX, coordinateY + this.radius / 2, coordinateX + this.radius / 2, coordinateY + this.radius / 2, coordinateX + this.radius / 2, coordinateY);
    context.bezierCurveTo(coordinateX + this.radius / 2, coordinateY - this.radius / 2, coordinateX, coordinateY - this.radius / 2, coordinateX, coordinateY);
    context.closePath();
    context.fillStyle = color;
    context.fill();
  }

}
