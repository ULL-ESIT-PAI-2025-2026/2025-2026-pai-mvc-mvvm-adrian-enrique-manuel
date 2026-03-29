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
 * @desc Main file for the MVVM application.
 */

import { User, UserData } from './model.js';
import { ViewModel } from './viewmodel.js';
import { View } from './view.js';

// Entry point
function main(containerId: string, data: UserData): void {
  const root = document.getElementById(containerId);
  if (!root) return;
  const model = new User(data.firstName, data.lastName);
  const viewModel = new ViewModel(model);
  const view = new View(viewModel);
  root.appendChild(view.getElement());
}

main('app', { firstName: 'John', lastName: 'Doe' });
