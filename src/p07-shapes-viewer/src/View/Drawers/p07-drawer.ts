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
 * @desc Interface that defines the contract for drawing figures - View.
 */

/**
 * Interface that defines the contract for a figure drawer.
 * This interface is used to implement the Strategy pattern, allowing
 * different drawing strategies for different figure types.
 */
export interface Drawer {

  /**
   * Draws a figure on the canvas.
   * @param context The canvas rendering context.
   * @param coordinateX X coordinate where the figure will be drawn.
   * @param coordinateY Y coordinate where the figure will be drawn.
   * @param color Color to fill the figure with.
   */
  draw(context: CanvasRenderingContext2D, coordinateX: number, coordinateY: number, color: string): void;

}
