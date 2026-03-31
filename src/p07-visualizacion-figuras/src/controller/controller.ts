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
 * @description Class that represents a controller - Controller.
 */

import { View } from '../view/view.js';
import { Figure } from '../model/figure.js';
import { FigureCreator } from '../model/figure-creator.js';

/**
 * @description Controller class that coordinates between the Model and the View.
 * @class Controller
 */
export class Controller {

  /**
   * @description Constructor for Controller.
   * @param view The view instance to be used by the controller.
   */
  constructor(private view: View) {}

  /**
   * @description Initializes the application by generating and rendering random figures.
   */
  drawFigures(numberOfFigures: number): void {
    try {
      
      let figures: Figure[] = [];
      for (let i: number = 0; i < numberOfFigures; i++) {
        const figure: Figure = FigureCreator.generateRandomFigure();
        figures.push(figure);
      }

      this.view.renderFigures(figures);

    } catch (error) {
      console.error('Error drawing figures:', error);
    }
  }
}
