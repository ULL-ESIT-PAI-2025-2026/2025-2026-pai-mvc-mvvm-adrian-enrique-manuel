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
 * @desc File containing the definition of the Todo interface.
 * @see {@link https://github.com/taniarascia/mvc }
 */

/**
 * Interface to represent a task in the todo list in a very simple way.
 */
export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}