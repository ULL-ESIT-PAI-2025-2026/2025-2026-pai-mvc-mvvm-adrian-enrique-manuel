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
 * @description Class that represents the view - MVC View.
 */

import { Figure } from '../model/figure.js';

/**
 * @description Class that represents the view - responsible only for presentation.
 * @class View
 */
export class View {

  private readonly colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  /**
   * @description Method to render a figure on the canvas.
   * @param figure - Figure to render.
   */
  renderFigure(figure: Figure): void {
    figure.draw(
      Math.random() * (figure.getCanvas().width - 100) + 50,
      Math.random() * (figure.getCanvas().height - 100) + 50,
      this.colors[Math.floor(Math.random() * this.colors.length)]
    );
  }

  /**
   * @description Method to render multiple figures on the canvas.
   * @param figures - Array of figures to render.
   */
  renderFigures(figures: Figure[]): void {
    figures.forEach(figure => this.renderFigure(figure));
  }

  /**
   * @description Displays a message in the console.
   * @param message - Message to display.
   */
  showMessage(message: string): void {
    console.log(message);
  }

  /**
   * @description Displays an error in the console.
   * @param error - Error to display.
   */
  showError(error: string): void {
    console.error(error);
  }
}
