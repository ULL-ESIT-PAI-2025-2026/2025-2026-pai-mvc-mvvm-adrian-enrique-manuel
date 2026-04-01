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
 * @desc Class that represents a controller - Controller.
 */

import { View } from '../View/p07-view.js';
import { Figure } from '../Model/p07-figure.js';
import { FigureCreatorModel } from '../Model/p07-figure-creator.js';

/**
 * Controller class that coordinates between the Model and the View.
 */
export class Controller {

  /**
   * Constructor for Controller.
   * @param view The view instance to be used by the controller.
   * @param model The model instance to be used by the controller.
   */
  constructor(private view: View, private model: FigureCreatorModel) {}

  /**
   * Initializes the application by generating and rendering random figures.
   */
  drawFigures(numberOfFigures: number): void {
    try {
      
      let figures: Figure[] = [];
      for (let i: number = 0; i < numberOfFigures; i++) {
        const figure: Figure = this.model.generateRandomFigure();
        figures.push(figure);
      }

      this.view.renderFigures(figures);

    } catch (error) {
      console.error('Error drawing figures:', error);
    }
  }
}
