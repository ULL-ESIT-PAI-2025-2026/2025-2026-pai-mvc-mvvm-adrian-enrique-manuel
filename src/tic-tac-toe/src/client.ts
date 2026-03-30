/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since Mar 30 2026
 * @description Program that initializes the TicTacToe controller and starts the game execution.
 */

import {TicTacToeController} from './Controller/tic-tac-toe-controller.js';

/**
 * Main function of the program.
 */
function main() {
  const ticTacToe = new TicTacToeController();
  ticTacToe.run();
}

main();