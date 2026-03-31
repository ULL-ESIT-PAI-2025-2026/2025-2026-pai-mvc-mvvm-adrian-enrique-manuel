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
 * @desc Main client that starts the application for visualizing geometric figures using the MVC pattern.
 */

import { View } from './view/view.js';
import { Controller } from './controller/controller.js';

/**
 * Main function that runs when the page loads.
 * Implements the MVC pattern for visualizing geometric figures.
 */
function main(): void {
  try {
    const numberOfFigures = parseInt(prompt('Enter the number of figures to display:') || '0');
    
    if (isNaN(numberOfFigures) || numberOfFigures < 0) {
      throw new Error('Please enter a valid positive number.');
    }

    const view = new View();
    
    const controller = new Controller(view);
    
    controller.drawFigures(numberOfFigures);

  } catch (error) {
    console.error('Error in main application:', error);
  }
}

main();