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
 * @desc Class that represents a geometric figure - Model.
 */

/**
 * Abstract class that represents a geometric figure in the model.
 * Responsibilities: Store geometric properties and compute area/perimeter.
 * Rendering is delegated to the View layer via drawer classes.
 */
export abstract class Figure {

  /**
   * Constructor for Figure.
   * No longer handles canvas/rendering concerns - those are delegated to the View.
   */
  constructor() {}

  /**
   * Method to calculate the area of the figure.
   * @returns The area of the figure.
   */
  abstract calculateArea(): number;

  /**
   * Method to calculate the perimeter of the figure.
   * @returns The perimeter of the figure.
   */
  abstract calculatePerimeter(): number;
}
