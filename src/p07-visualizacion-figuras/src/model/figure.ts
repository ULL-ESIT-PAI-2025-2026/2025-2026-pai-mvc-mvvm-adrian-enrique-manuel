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
 * @description Class that represents a geometric figure - Model.
 */

/**
 * @description Abstract class that represents a geometric figure in the model.
 * @class Figure
 */
export abstract class Figure {

  constructor(protected canvas: HTMLCanvasElement = 
  document.getElementById('canvas') as HTMLCanvasElement,
              protected context: CanvasRenderingContext2D | null = 
              (document.getElementById('canvas') as HTMLCanvasElement).getContext('2d')) {
                if (this.context === null) {
                  throw new Error('Could not get the canvas context.');
                }
                if (!this.canvas) {
                  throw new Error('Could not get the canvas.');
                }
              }

  /**
   * @description Method to draw the figure on the canvas.
   * @param coordinateX - X coordinate of the figure.
   * @param coordinateY - Y coordinate of the figure.
   * @param color - Color of the figure.
   */
  abstract draw(coordinateX: number, coordinateY: number, color: string): void;

  /**
   * @description Method to calculate the area of the figure.
   * @returns The area of the figure.
   */
  abstract calculateArea(): number;

  /**
   * @description Method to calculate the perimeter of the figure.
   * @returns The perimeter of the figure.
   */
  abstract calculatePerimeter(): number;

  /**
   * @description Obtiene el canvas.
   * @returns El canvas.
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * @description Gets the canvas context.
   * @returns The canvas context.
   */
  getContext(): CanvasRenderingContext2D | null {
    return this.context;
  }
}
