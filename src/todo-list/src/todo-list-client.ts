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
 * @desc File containing the entry point of the application, 
 *       where the Model, View, and Controller are instantiated and wired together.
 * @see {@link https://github.com/taniarascia/mvc }
 */

import { Controller } from './controller.js';
import { Model } from './model.js';
import { View } from './view.js';

// Entry point
function main(): void {
  new Controller(new Model(), new View());
}

main();